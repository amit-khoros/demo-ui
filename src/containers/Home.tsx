import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import styled from 'styled-components/macro';
import ChatShell from 'components/chatShell/ChatShell';
import Scheduler from 'containers/Scheduler';
import PaymentScreen from 'containers/PaymentScreens';
import CarouselScreen from 'containers/CaraouselScreen'
import 'components/carousel/Carousel.css';

import { SCHEDULER_PATH,PAYMENT_PATH, CAROUSEL_PATH } from 'constants/routes';
import MapChart from 'components/worldMap/WorldMap';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


interface IProps {
}

type Props = IProps;

  const Home: React.FC<Props> = () => {
  const [chatShellIdentity, setChatShellIdentity] = useState(0);
  const [content, setContent] = useState("");
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
          url={""}
          handleChatShellIdentity={handleChatShellIdentity} 
          selectedChatShell={chatShellIdentity} 
          identity={2}
        >
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
        </ChatShell>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
    </FlexBox>
  )
};

export default Home;
