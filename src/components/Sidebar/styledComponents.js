import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  margin-right: 15px;
  min-height: 100vh;
  position: fixed;
  top: 87px;
  left: 10px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  padding-left: 10px;
`

export const PageOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`

export const OptionLink = styled(Link)`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#313131')};
`

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const OptionHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#313131')};
  margin-left: 25px;
`

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 15px;
  margin-top: auto;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const ContactAppsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FacebookLogo = styled.img`
  width: 40px;
  margin-right: 15px;
`

export const TwitterLogo = styled.img`
  width: 40px;
  margin-right: 15px;
`

export const LinkedinLogo = styled.img`
  width: 40px;
  margin-right: 15px;
`

export const ContactMsg = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
`
