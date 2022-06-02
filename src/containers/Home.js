import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ChatShell from 'components/chatShell/ChatShell';
import Scheduler from 'containers/Scheduler';
import { SCHEDULER_PATH,DESTINATION_RESTAURANTS } from 'constants/routes';
import Maps from 'components/restaurants/Restaurants';
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const Home = () => {
  const [chatShellIdentity, setChatShellIdentity] = useState(0);

  const handleChatShellIdentity = (num) => {
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
          url={DESTINATION_RESTAURANTS }
          handleChatShellIdentity={handleChatShellIdentity} 
          selectedChatShell={chatShellIdentity} 
          identity={2}
        >
       <Maps/>
        </ChatShell>
    </FlexBox>
  )
};

export default Home;
