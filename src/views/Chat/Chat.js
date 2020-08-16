import React, { Component } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.scss'

import ChatCard from './../components/ChatCard/ChatCard'

let socket
const endpoint = 'localhost:5000'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      room: '',
      messages: [],
    }
  }

  componentDidMount() {
    this.handleConection()
  }

  handleConection = () => {
    const { name, room } = queryString.parse(this.props.location.search)

    socket = io(endpoint)

    this.setState({
      name: name,
      room: room,
    })

    socket.emit('join', { name: name, room: room }, () => {})

    socket.on('message', (message) => {
      this.setState((prevState) => {
        return { messages: [...prevState.messages, message] }
      })
    })
  }

  componentWillUnmount() {
    socket.emit('disconnect')
    socket.off()
  }

  sendMessage = (message, callback) => {
    socket.emit('sendMessage', message, callback)
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <header className="section__title">
                <h1>Chat</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ChatCard
                user={this.state.name}
                room={this.state.room}
                messages={this.state.messages}
                sendMessage={this.sendMessage}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Chat
