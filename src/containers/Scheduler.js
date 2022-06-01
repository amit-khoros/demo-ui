import React, { useState } from 'react';

import Calendar from 'components/calendar/Calendar';

const Scheduler = () => {
    const [isRoundTrip, setIsRoundTrip]= useState(false);
    const [departureDate, setDepatureDate]= useState({date: undefined, month: undefined, year: undefined});
    const [returnDate, setReturnDate]= useState({date: undefined, month: undefined, year: undefined});

    const setDatesFnc = ({date, month, year}) => {

        if(isRoundTrip && departureDate.date && !returnDate.date) {
           const departureMilliSeconds = new Date(departureDate.year, departureDate.month, departureDate.date).getTime();
           const returnMilliSeconds = new Date(year, month, date).getTime();
           if(returnMilliSeconds > departureMilliSeconds) {
                const returnDates = {
                    ...returnDate,
                    date, 
                    month, 
                    year
                };
                setReturnDate(returnDates);
            } else {
                const departureDates = {
                    ...departureDate,
                    date, 
                    month, 
                    year
                }
                setDepatureDate(departureDates);
            }
        } else {
            const departureDates = {
                ...departureDate,
                date, 
                month, 
                year
            }
            setDepatureDate(departureDates);
            setReturnDate({ ...returnDate, date: undefined, month: undefined, year: undefined});
        }
    }

    return (
        <>
            <Calendar 
                isRoundTrip={isRoundTrip} 
                departureDate={departureDate} 
                returnDate={returnDate}>
                <Calendar.Row>
                    <Calendar.Button 
                        active={!isRoundTrip} 
                        handleClick={() => setIsRoundTrip(false)}>One-way</Calendar.Button>
                    <Calendar.Button 
                        active={isRoundTrip} 
                        handleClick={() => setIsRoundTrip(true)}>Round trip</Calendar.Button>
                </Calendar.Row>
                <Calendar.Row>
                    <Calendar.DateTextBox />
                </Calendar.Row>
                <Calendar.DatePicker handleClick= {setDatesFnc}/>
            </Calendar>
        </>
    )
};

export default Scheduler;
