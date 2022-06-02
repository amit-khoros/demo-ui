import React from 'react';
import styled from 'styled-components/macro';
import ChatShell from 'components/chatShell/ChatShell';
import Scheduler from 'containers/Scheduler';
import PaymentScreen from 'containers/PaymentScreens';
import CarouselScreen from 'containers/CaraouselScreen'
import 'components/carousel/Carousel.css';


const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


interface IProps {
}

type Props = IProps;

  const Home: React.FC<Props> = () => {
  return (
    <FlexBox>
        <ChatShell>
            <Scheduler />
        </ChatShell>
        <ChatShell>
         <PaymentScreen/>
        </ChatShell>   
        <ChatShell>
         <CarouselScreen/>
        </ChatShell> 
         
    </FlexBox>
  )
};

export default Home;
