import React from 'react'

const ChatCardMessagesItem = (props) => {
  let messageItem
  if (props.message.user === 'admin') {
    messageItem = (
      <div className="message message--center">
        <div className="message__text">
          <p>{props.message.text}</p>
        </div>
      </div>
    )
  } else if (props.message.user === props.user) {
    messageItem = (
      <div className="message message--right">
        <div className="message__text">
          <span className="message__text_user">You</span>
          <p>{props.message.text}</p>
        </div>
      </div>
    )
  } else {
    messageItem = (
      <div className="message">
        <div className="message__icon">
          {props.message.user.charAt(0).toUpperCase()}
        </div>
        <div className="message__text">
          <span className="message__text_user">{props.message.user}</span>
          <p>{props.message.text}</p>
        </div>
      </div>
    )
  }

  return <div>{messageItem}</div>
}

export default ChatCardMessagesItem
