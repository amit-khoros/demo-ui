import React, { useContext, createContext } from 'react';

import { 
    Container, 
    Row, 
    DateTextBoxWrapper,
    DateText,
    DatePicker, 
    WeekDaysGrid, 
    WeekDay, 
    MonthsContainer,
    MonthBox,
    MonthTitle,
    MonthGrid,
    DayBox,
    Button,
    Divider
} from './Calendar-styled'; 

const MONTHS = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const calendar = new Date();
const currentYear = calendar.getFullYear();
const currentMonth = calendar.getMonth();
const currentDate = calendar.getDate();

const getStyles = ({ departureDate, returnDate, currentDate }) => {
    const departureMilliSeconds = new Date(departureDate.year, departureDate.month, departureDate.date).getTime();
    const returnMilliSeconds = new Date(returnDate.year, returnDate.month, returnDate.date).getTime();
    const currentMilliSeconds = new Date(currentDate.year, currentDate.month, currentDate.date).getTime();
    const styles = {
        highlight: false,
        active: false
    };

    if(currentMilliSeconds > departureMilliSeconds && currentMilliSeconds<returnMilliSeconds) {
        styles.highlight = true;
        return styles;
    } else if(currentMilliSeconds === departureMilliSeconds || currentMilliSeconds === returnMilliSeconds) {
        styles.active = true;
        return styles;
    } else {
        return styles;
    }
    
};

const CalendarContext = createContext(null);

const Calendar = ({ children, ...props }) => {
    const { isRoundTrip, departureDate, returnDate } = props;

    return (
        <CalendarContext.Provider
            value= {{
                isRoundTrip,
                departureDate,
                returnDate
            }}
        >
            <Container {...props}>
                {children}
            </Container>
        </CalendarContext.Provider>
    )
};

Calendar.Row = ( {children, ...props} ) => {
    return (
        <Row>{children}</Row>
    )
};

Calendar.DatePicker = ({ children, ...props }) => {
    return (
        <DatePicker>
            {children}
            <Calendar.WeekDays />
            <Months {...props} />
        </DatePicker>
    )
};

Calendar.WeekDays = () => {
    
    return (
        <WeekDaysGrid>
            {
                WEEKDAYS.map( (day,ind) => (
                    <WeekDay key={day+ind}>{day}</WeekDay>
                ))
            }
        </WeekDaysGrid>
    )
};

const Months = ({ children, ...props }) => {

    const { handleClick } = props
    const totalMonths = new Array(13).fill(0);

    return (
        <MonthsContainer>
            {
                totalMonths.map((val, ind) => (
                    <Month key={ind} month={currentMonth+ind} handleClick={handleClick} />
                ))
            }
        </MonthsContainer>
    );
};

const Month = ({month, handleClick}) => {

    const calendar = new Date(currentYear, month, 1);
    const year = calendar.getFullYear();
    const monthIndex = month < MONTHS.length ? month : month - MONTHS.length;

    return (
        <MonthBox>
            <MonthTitle>{`${MONTHS[monthIndex]} ${year}`}</MonthTitle>
            <MonthGrid>
                <Day month={month} handleClick ={handleClick}/>
            </MonthGrid>
        </MonthBox>
    )
};

const Day = ({ month, handleClick }) => {
    const { isRoundTrip, departureDate, returnDate } = useContext(CalendarContext);
    const calendar = new Date(currentYear, month, 1);
    const startWeekDayOfMonth = calendar.getDay();
    const year = calendar.getFullYear();
    const lastDateOfMonth = new Date(currentYear, month+1, 0).getDate();

    const getDay = ({ disabled, date }) => {
        const currentDate = {
            date,
            month,
            year
        };
        
        let { highlight, active } = getStyles({departureDate, returnDate, currentDate, isRoundTrip});

        return (
            <DayBox 
                key= {date+''+year}
                onClick= {() => handleClick({date, month, year})}
                highlight= {highlight}
                active= {active}
                disabled= {disabled}
            >
                {date}
            </DayBox>
        )
    }

    let dayCounter = 1;
    const totalDays = new Array(lastDateOfMonth + startWeekDayOfMonth).fill(0);
    return totalDays.map((day, ind) => {
        if(ind < startWeekDayOfMonth) {
            return getDay({});
        } else if(currentMonth === month && year === currentYear && dayCounter < currentDate) {
            return getDay({disabled: true, date: dayCounter++})
        } else {
            return getDay({date: dayCounter++});
        }
    });
};

Calendar.DateTextBox = function DateTextBox( {children, ...props }) {
    const { isRoundTrip, departureDate, returnDate } = useContext(CalendarContext);
    const highlightDeparture = isRoundTrip && !departureDate.date ? true : false;
    const highlightReturn = isRoundTrip && departureDate.date && !returnDate.date ? true : false;
    const departureFormat = (departureDate.date && `${departureDate.date} ${MONTHS[departureDate.month]} ${departureDate.year}`) || 'Departure';
    const returnFormat = (returnDate.date && `${returnDate.date} ${MONTHS[returnDate.month]} ${returnDate.year}`) || 'Return';

    return (
        <DateTextBoxWrapper>
           <DateText highlight={highlightDeparture}>{departureFormat}</DateText>
           {
               isRoundTrip && (
                    <>
                        <Divider />
                        <DateText highlight={highlightReturn}>{returnFormat}</DateText>
                    </>
               )
           }
        </DateTextBoxWrapper>
    )
};

Calendar.Button = ( {children, ...props} ) => {
    let active = props.active || false;
    let handleClick = props.handleClick;
    return (
        <Button active={active} onClick={handleClick}>{children}</Button>
    )
};

export default Calendar;