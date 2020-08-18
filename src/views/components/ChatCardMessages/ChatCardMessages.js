import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import ChatCardMessagesItem from './../ChatCardMessagesItem/ChatCardMessagesItem'

const ChatCardMessages = (props) => {
  return (
    <ScrollToBottom
      className="chat-card__messages"
      followButtonClassName="scroll-bottom"
    >
      {props.messages.map((message) => (
        <React.Fragment key={message.id}>
          <ChatCardMessagesItem user={props.user} message={message} />
        </React.Fragment>
      ))}
    </ScrollToBottom>
  )
}

export default ChatCardMessages
