import React from 'react';

import './chatShell.css';

const ChatShell = ({ children }) => {
  return (
    <div className='chat-shell'>
        <header>Chat</header>
        <section>
            <div className='section-header'>Close</div>
            <div className='section-body'>{children}</div>
        </section>
        <div className='overlay' />
    </div>
  )
};

export default ChatShell;

