import React, { useState } from 'react'

const ChatCardInput = (props) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = (event) => {
    event.preventDefault()

    props.sendMessage(message, () => setMessage(''))
  }

  return (
    <div className="chat-card__input">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Message"
          onChange={({ target: { value } }) => setMessage(value)}
          value={message}
          onKeyPress={(event) =>
            event.key === 'Enter' ? handleSendMessage(event) : null
          }
        />
      </div>
    </div>
  )
}

export default ChatCardInput
