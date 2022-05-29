import React from 'react';

import ChatShell from 'components/chatShell/ChatShell';
import Scheduler from 'containers/Scheduler';

const Home = () => {
  return (
    <div>
        <ChatShell>
            <Scheduler />
        </ChatShell>
    </div>
  )
};

export default Home;
