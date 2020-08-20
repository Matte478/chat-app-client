import React, { useState } from 'react'

import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import { ReactComponent as IconSend } from '../../../assets/images/icon-send.svg'

const ChatCardInput = (props) => {
  const [message, setMessage] = useState('')
  const [activeEmojis, setActiveEmojis] = useState(false)

  const handleSendMessage = (event) => {
    event.preventDefault()

    if (!message) return

    props.sendMessage(message, () => setMessage(''))
  }

  const handleShowEmojis = () => {
    setActiveEmojis(!activeEmojis)
  }

  const addEmoji = (e) => {
    const sym = e.unified.split('-')
    let codesArray = []
    sym.forEach((el) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)

    setMessage(message + emoji)
  }

  return (
    <div className="chat-card__input">
      <div className="form-group p-relative">
        <input
          className="form-control message-input"
          type="text"
          placeholder="Message"
          onChange={({ target: { value } }) => {
            setMessage(value)
          }}
          value={message}
          onKeyPress={(event) =>
            event.key === 'Enter' ? handleSendMessage(event) : null
          }
        />
        {activeEmojis && (
          <span className="emojis-card">
            <Picker onSelect={addEmoji} emojiTooltip={true} />
          </span>
        )}
        <span className="emojis-btn" onClick={handleShowEmojis}>
          {String.fromCodePoint(0x1f606)}
        </span>
        <IconSend className="submit-btn" onClick={handleSendMessage} />
      </div>
    </div>
  )
}

export default ChatCardInput
