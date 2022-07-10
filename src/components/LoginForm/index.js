

// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, error: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
    this.setState({username: '', password: ''})
  }

  onFailureLogin = errorMsg => {
    this.setState({showError: true, error: errorMsg})
  }

  render() {
    const {error, showError} = this.state

    return (
      <div className="home-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>

        <form onSubmit={this.submitForm} className="form-container">
          <div className="form-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="form-image"
            />
          </div>

          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={this.changeUsername}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={this.changePassword}
          />
          <button className="submit-button" type="submit">
            Login
          </button>
          {showError ? <p className="error">{error}</p> : null}
        </form>
      </div>
    )
  }
}

export default LoginForm
