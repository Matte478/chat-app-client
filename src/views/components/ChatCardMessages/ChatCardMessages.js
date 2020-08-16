import React from 'react'

const ChatCardMessages = (props) => {
  const renderMessage = (message, index) => {
    return (
      <div>
        {message.user !== props.user ? (
          <div className="message" key={index}>
            <div className="message__icon">
              {message.user.charAt(0).toUpperCase()}
            </div>
            <div className="message__text">
              <span className="message__text_user">{message.user}</span>
              <p>{message.text}</p>
            </div>
          </div>
        ) : (
          <div className="message message--right" key={index}>
            <div className="message__text">
              <span className="message__text_user">You</span>
              <p>{message.text}</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="chat-card__messages">
      {props.messages.map((message, index) => renderMessage(message, index))}
    </div>
  )
}

export default ChatCardMessages
