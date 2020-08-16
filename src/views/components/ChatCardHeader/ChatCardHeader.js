import React from 'react'
import { Link } from 'react-router-dom'

const ChatCardHeader = (props) => {
  return (
    <header className="chat-card__header">
      <span className="icon-online" />
      <span className="room">{props.room}</span>
      <Link to={'/'} className="icon-close">
        <span />
        <span />
      </Link>
    </header>
  )
}

export default ChatCardHeader
