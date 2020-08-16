import React from 'react'

import './ChatCard.scss'

import ChatCardHeader from './../ChatCardHeader/ChatCardHeader'
import ChatCardMessages from './../ChatCardMessages/ChatCardMessages'
import ChatCardInput from './../ChatCardInput/ChatCardInput'

const ChatCard = (props) => {
    return (
      <div className="chat-card">
        <ChatCardHeader room={props.room} />
        <ChatCardMessages user={props.user} messages={props.messages} />
        <ChatCardInput sendMessage={props.sendMessage} />
      </div>
    )
}

export default ChatCard
