import styled from 'styled-components/macro';

export const Container = styled.div`
    margin-top: 20px;  
`;

export const Row = styled.div`
    margin-bottom: 20px;
`;

export const DateTextBoxWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    height: 40px;
    background: #fff;
    border: 1px solid #e2e4e8;
    border-radius: 4px;
`;

export const DateText = styled.p`
    color: ${props => props.highlight ? '#1a73e8' : ''};
`;

export const DatePicker = styled.div`
    margin-top: 20px;
`;

export const WeekDaysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
`

export const WeekDay = styled.div`
    display: flex;
    justify-content: center;
`;

export const MonthsContainer = styled.div`
    margin-top: 20px;  
    height: 280px;
    overflow: auto;
`;

export const MonthBox = styled.div``;

export const MonthTitle = styled.p`
    display: flex;
    justify-content: center;
`;

export const MonthGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
`;

export const DayBox = styled.div`
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${ props => props.disabled ? '#9a9a9a' : props.active ? '#fff' : ''};
    background-color: ${ props => props.highlight ? '#d2e3fc' : props.active ? '#1a73e8' : ''};
`;

export const Button = styled.button`
    height: 40px;
    width: 100px;
    border: 1px solid #e2e4e8;
    border-radius: 4px;
    margin-right: 7px;
    cursor: pointer;
    background-color: ${props => props.active ? '#1a73e8' : '#fff'} ;
    color: ${props => props.active ? '#fff' : ''} ;
`;

export const Divider = styled.div`
    height: 20px;
    border: 1px solid #e2e4e8;
`;

