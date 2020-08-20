import React from 'react'
import { Link } from 'react-router-dom'

const ChatCardHeader = ({ room }) => {
  return (
    <header className="chat-card__header">
      <span className="icon-online" />
      <span className="room">{room}</span>
      <Link to={'/'} className="icon-close">
        <span />
        <span />
      </Link>
    </header>
  )
}

export default ChatCardHeader
