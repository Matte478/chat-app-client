import React, { Component } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.scss'

let socket
const endpoint = 'localhost:5000'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      room: '',
      message: '',
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

  componentDidUpdate() {}

  handleMessage = (event) => {
    this.setState({ message: event.target.value })
  }

  sendMessage = (event) => {
    event.preventDefault()
    if (!this.state.message) return

    socket.emit('sendMessage', this.state.message, () => {
      this.setState({ message: '' })
    })
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
              <div className="chat-card">
                <header className="chat-card__header">{this.state.room}</header>
                <div className="chat-card__messages">
                  {this.state.messages.map((message, index) =>
                    <div className="message" key={index}>
                      {message.user}: {message.text}
                    </div>
                  )}
                </div>
                <div className="chat-card__input">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Message"
                      onChange={this.handleMessage}
                      value={this.state.message}
                      onKeyPress={(event) =>
                        event.key === 'Enter' ? this.sendMessage(event) : null
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Chat
