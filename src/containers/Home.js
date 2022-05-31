import React from 'react';
import styled from 'styled-components/macro';
import ChatShell from 'components/chatShell/ChatShell';
import Scheduler from 'containers/Scheduler';
import PaymentScreen from 'containers/PaymentScreens';


const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const Home = () => {
  return (
    <FlexBox>
        <ChatShell>
            <Scheduler />
        </ChatShell>
        <ChatShell>
         <PaymentScreen/>
        </ChatShell>      
    </FlexBox>
  )
};

export default Home;
