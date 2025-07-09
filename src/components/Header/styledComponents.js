import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const WebsiteLink = styled(Link)`
  cursor: pointer;
  outline: none;
  text-decoration: none;
`

export const WebisteLogo = styled.img`
  width: 180px;
  margin-left: 30px;
`

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
`

export const ProfileIcon = styled.img`
  width: 40px;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
`

export const LogoutBtn = styled.button`
  font-family: 'Roboto';
  font-size: 24px;
  color: #3b82f6;
  background-color: transparent;
  border: 1px solid #3b82f6;
  border-radius: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  outline: none;
`

export const LogoutConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #212121;
  border-radius: 15px;
`

export const LogoutQuestion = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CancelBtn = styled.button`
    font-family: 'Roboto',
    font-size: 24px;
    font-weight: bold;
    color: #f1f1f1;
    background-color: transparent;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
    outline: none;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
`

export const ConfirmBtn = styled.button`
    font-family: 'Roboto',
    font-size: 20px;
    font-weight: bold;
    color: #f1f1f1;
    background-color: #3b82f6;
    border: 1px solid #3b82f6;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
    outline: none;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
`
