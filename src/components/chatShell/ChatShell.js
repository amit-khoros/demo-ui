import React from 'react';

import './chatShell.css';

const ChatShell = ({ children, url, identity, selectedChatShell, handleChatShellIdentity }) => {
  const urlPath = `${window.location.origin}${url ? url : ''}`;
  const buttonText = selectedChatShell !== identity ? 'Copy' : 'Copied';
  const buttonStyles = `copy-button ${selectedChatShell === identity ? 'copied' : ''}`;

  const handleClipboard = () => {
    navigator.clipboard.writeText(urlPath);
    handleChatShellIdentity(identity);
  };

  return (
    <div className='container'>
      <div className='chat-shell'>
          <header>Chat</header>
          <section>
              <div className='section-header'>Close</div>
              <div className='section-body'>{children}</div>
          </section>
          <div className='overlay' />
      </div>
      <div className="clipboard">
        <div className="img-holder" />
        <p className="url-holder">{urlPath}</p>
        <button className={buttonStyles} onClick={handleClipboard}>{buttonText}</button>
      </div>
    </div>
  )
};

export default ChatShell;

