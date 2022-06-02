import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ChatShell from 'components/chatShell/ChatShell';
import Scheduler from 'containers/Scheduler';
import PaymentScreen from 'containers/PaymentScreens';
import CarouselScreen from 'containers/CaraouselScreen'
import 'components/carousel/Carousel.css';
import Weatherapi from 'components/weather/Weather';
import { SCHEDULER_PATH,PAYMENT_PATH, CAROUSEL_PATH,WEATHER_PATH, RESTAURANTS_PATH } from 'constants/routes';
import Restaurants from 'components/restaurants/Restaurants';

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 75px;
`;


interface IProps {
}

type Props = IProps;

  const Home: React.FC<Props> = () => {
  const [chatShellIdentity, setChatShellIdentity] = useState(0);

  const handleChatShellIdentity = (num: React.SetStateAction<number>) => {
    setChatShellIdentity(num)
  }

  return (
    <FlexBox>
        <ChatShell 
          url={SCHEDULER_PATH} 
          handleChatShellIdentity={handleChatShellIdentity} 
          selectedChatShell={chatShellIdentity} 
          identity={1}
        >
            <Scheduler />
        </ChatShell>
        <ChatShell
        url={PAYMENT_PATH}
        identity={3}
        handleChatShellIdentity={handleChatShellIdentity} 
        selectedChatShell={chatShellIdentity} 

        >
         <PaymentScreen/>
        </ChatShell>   
        <ChatShell
        url={CAROUSEL_PATH}
        identity={4}
        handleChatShellIdentity={handleChatShellIdentity} 
        selectedChatShell={chatShellIdentity} 
        >
          
        
         <CarouselScreen/>
        </ChatShell> 
         
        <ChatShell 
          url={WEATHER_PATH}
          handleChatShellIdentity={handleChatShellIdentity} 
          selectedChatShell={chatShellIdentity} 
          identity={2}
        >
          <Weatherapi/>
        </ChatShell>
        <ChatShell 
          url={RESTAURANTS_PATH}
          handleChatShellIdentity={handleChatShellIdentity} 
          selectedChatShell={chatShellIdentity} 
          identity={2}
        >
          <Restaurants/>
        </ChatShell>
    </FlexBox>
  )
};

export default Home;
