import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingPageContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  margin-top: 10px;
  height: auto;
`

export const GamingPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 280px;
  padding-left: 40px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 1200px;
  min-height: 100vh;
  height: auto;
`

export const GamingLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const GamingErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const GamingErrorImg = styled.img`
  width: 200px;
  margin-bottom: 10px;
`

export const GamingErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const GamingErrorInfo = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#424242')};
  margin-bottom: 20px;
`

export const GamingRetryBtn = styled.button`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const GamingHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f5f9')};
  margin-left: 0px;
  padding-left: 30px;
`

export const GamingIcon = styled.p`
  background-color: #000000;
  color: #ff0000;
  padding: 10px;
  border-radius: 40px;
  margin-right: 15px;
`

export const GamingHeading = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const GamingResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f8fafc')};
`

export const GamingLinkItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  outline: none;
`

export const GamingResultItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  margin-right: 15px;
`

export const GamingImg = styled.img`
  width: 200px;
`

export const GamingItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const GamingVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  margin-bottom: 0px;
`

export const GamingViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#313131')};
  margin-right: 20px;
`
