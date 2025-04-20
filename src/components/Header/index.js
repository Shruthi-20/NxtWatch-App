import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {
  NavbarContainer,
  WebsiteLink,
  WebisteLogo,
  NavLinksContainer,
  ThemeButton,
  ProfileIcon,
  LogoutBtn,
  LogoutConfirmContainer,
  LogoutQuestion,
  ButtonsContainer,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

class Header extends Component {
  state = {isDarkTheme: false}

  onClickTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {isDarkTheme} = this.state
    const websiteLogoUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <NavbarContainer>
        <WebsiteLink to="/">
          <WebisteLogo src={websiteLogoUrl} alt="website logo" />
        </WebsiteLink>
        <NavLinksContainer>
          <ThemeButton
            type="button"
            data-testid="theme"
            onClick={this.onClickTheme}
          >
            {isDarkTheme ? (
              <FiSun size={30} color="white" />
            ) : (
              <FaMoon size={30} />
            )}
          </ThemeButton>
          <ProfileIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <Popup modal trigger={<LogoutBtn type="button">Logout</LogoutBtn>}>
            {close => (
              <LogoutConfirmContainer>
                <LogoutQuestion>
                  Are you sure, you want to logout?
                </LogoutQuestion>
                <ButtonsContainer>
                  <CancelBtn type="button" onClick={() => close()}>
                    Cancel
                  </CancelBtn>
                  <ConfirmBtn type="button" onClick={this.onClickLogout}>
                    Confirm
                  </ConfirmBtn>
                </ButtonsContainer>
              </LogoutConfirmContainer>
            )}
          </Popup>
        </NavLinksContainer>
      </NavbarContainer>
    )
  }
}

export default withRouter(Header)
