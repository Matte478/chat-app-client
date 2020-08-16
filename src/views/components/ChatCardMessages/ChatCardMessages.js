import React from 'react'

import ChatCardMessagesItem from './../ChatCardMessagesItem/ChatCardMessagesItem'

const ChatCardMessages = (props) => {
  const renderMessage = (message, index) => {
    return (
      <ChatCardMessagesItem user={props.user} message={message} index={index} />
    )
  }

  return (
    <div className="chat-card__messages">
      {props.messages.map((message, index) => renderMessage(message, index))}
    </div>
  )
}

export default ChatCardMessages
