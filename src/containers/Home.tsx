import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import ChatShell from 'components/chatShell/ChatShell';
import Carousel, { CarouselItem } from 'components/carousel/Carousel'
import Scheduler from 'containers/Scheduler';
import PaymentScreen from 'containers/PaymentScreens';
import CarouselScreen from 'containers/CaraouselScreen'
import 'components/carousel/Carousel.css';
import { CustomButton,Container } from 'components/button/Button-styled';


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
