import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import ChatCardMessagesItem from './../ChatCardMessagesItem/ChatCardMessagesItem'

const ChatCardMessages = (props) => {
  const renderMessage = (message, index) => {
    return (
      <ChatCardMessagesItem user={props.user} message={message} index={index} />
    )
  }

  return (
    <ScrollToBottom
      className="chat-card__messages"
      followButtonClassName="scroll-bottom"
    >
      {props.messages.map((message, index) => renderMessage(message, index))}
    </ScrollToBottom>
  )
}

export default ChatCardMessages
