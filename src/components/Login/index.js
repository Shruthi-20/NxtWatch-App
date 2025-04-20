import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBgPage,
  LoginContainer,
  WebsiteLogo,
  FormContainer,
  LabelText,
  InputText,
  ShowPwdContainer,
  ShowPwdCheckBox,
  ShowPwdText,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPwd: false,
    errorMsg: '',
    hasError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPwd = () => {
    this.setState(prevState => ({showPwd: !prevState.showPwd}))
  }

  onClickSubmit = async event => {
    event.preventDefault()
    this.setState({errorMsg: '', hasError: false})
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, hasError: true})
    }
  }

  render() {
    const {username, password, showPwd, errorMsg, hasError} = this.state
    console.log('Login component is rendering...')

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginBgPage>
        <LoginContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.onClickSubmit}>
            <LabelText htmlFor="username">USERNAME</LabelText>
            <InputText
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <LabelText htmlFor="password">PASSWORD</LabelText>
            <InputText
              id="password"
              type={showPwd ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <ShowPwdContainer>
              <ShowPwdCheckBox
                type="checkbox"
                id="showPwd"
                onClick={this.onClickShowPwd}
              />
              <ShowPwdText htmlFor="showPwd">Show Password</ShowPwdText>
            </ShowPwdContainer>
            <LoginBtn type="submit">Login</LoginBtn>
            {hasError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginContainer>
      </LoginBgPage>
    )
  }
}

export default Login
