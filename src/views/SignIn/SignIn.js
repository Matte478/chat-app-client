import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SignIn.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      room: '',
    }
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  handleChangeRoom = (event) => {
    this.setState({ room: event.target.value })
  }

  handleSignIn = (event) => {
    if (!this.state.name || !this.state.room) {
      console.log('nope')
      event.preventDefault()
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <header className="section__title">
                <h1>Sign In</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  onChange={this.handleChangeName}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Room"
                  onChange={this.handleChangeRoom}
                  value={this.state.room}
                />
              </div>
              <Link
                to={`/chat?name=${this.state.name}&room=${this.state.room}`}
                onClick={this.handleSignIn}
              >
                <button className="btn btn-block btn-accent" type="submit">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignIn
