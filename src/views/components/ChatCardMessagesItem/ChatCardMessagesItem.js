import React from 'react'

const ChatCardMessagesItem = ({ user, message }) => {
  let messageItem
  if (message.user === 'admin') {
    messageItem = (
      <div className="message message--center">
        <div className="message__text">
          <p className="message__text_content">{message.text}</p>
        </div>
      </div>
    )
  } else if (message.user === user) {
    messageItem = (
      <div className="message message--right">
        <div className="message__text">
          <p className="message__text_user">You</p>
          <p className="message__text_content">{message.text}</p>
        </div>
      </div>
    )
  } else {
    messageItem = (
      <div className="message">
        <div className="message__icon">
          {message.user.charAt(0).toUpperCase()}
        </div>
        <div className="message__text">
          <p className="message__text_user">{message.user}</p>
          <p className="message__text_content">{message.text}</p>
        </div>
      </div>
    )
  }

  return <div>{messageItem}</div>
}

export default ChatCardMessagesItem
