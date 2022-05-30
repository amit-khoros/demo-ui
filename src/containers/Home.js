import React from 'react';
import styled from 'styled-components/macro';

import ChatShell from 'components/chatShell/ChatShell';
import Scheduler from 'containers/Scheduler';

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
        {
          /**
          * 
          * custom component
          */
        }
        </ChatShell>
    </FlexBox>
  )
};

export default Home;
