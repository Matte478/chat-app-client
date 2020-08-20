import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import ChatCardMessagesItem from './../ChatCardMessagesItem/ChatCardMessagesItem'

const ChatCardMessages = ({ user, messages }) => {
  return (
    <ScrollToBottom
      className="chat-card__messages"
      followButtonClassName="scroll-bottom"
    >
      {messages.map((message) => (
        <React.Fragment key={message.id}>
          <ChatCardMessagesItem user={user} message={message} />
        </React.Fragment>
      ))}
    </ScrollToBottom>
  )
}

export default ChatCardMessages
