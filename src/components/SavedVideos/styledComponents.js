import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosPageContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  margin-top: 10px;
  height: auto;
`

export const SavedVideosPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 280px;
  padding-left: 40px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f8fafc')};
  width: 1200px;
  min-height: 100vh;
  height: auto;
`
export const SavedVideosErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const SavedVideosErrorImg = styled.img`
  width: 200px;
  margin-bottom: 10px;
`

export const SavedVideosErrorMessage = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SavedVideosErrorInfo = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#424242')};
  margin-bottom: 20px;
`

export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f1f5f9')};
  margin-left: 0px;
  padding-left: 30px;
`

export const SavedVideosIcon = styled.p`
  background-color: #000000;
  color: #ff0000;
  padding: 10px;
  border-radius: 40px;
  margin-right: 15px;
`

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SavedVideosResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f8fafc')};
`

export const SavedVideosLinkItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  outline: none;
`

export const SavedVideosResultItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const SavedVideosImg = styled.img`
  width: 300px;
  height: 200px;
  margin-right: 15px;
`

export const SavedVideosItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SavedVideosVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const SavedVideosChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#424242')};
`

export const SavedVideosViewsPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SavedVideosViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#313131')};
  margin-right: 20px;
`

export const SavedVideosPublishedAt = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#313131')};
  margin-left: 10px;
`
