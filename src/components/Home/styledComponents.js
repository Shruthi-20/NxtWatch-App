import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const BgHomePage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  min-height: 100vh;
`

export const HomePageContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  margin-top: 10px;
  height: auto;
`

export const PopupAndResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  min-height: 100vh;
  margin-left: 280px;
`

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f5f9')};
  width: 1200px;
  height: auto;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 20px;
`

export const SearchInput = styled.input`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
  padding-left: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#000000')};
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  outline: none;
  border: 1px solid #64748b;
  width: 400px;
`

export const SearchButton = styled.button`
  background-color: #ebebeb;
  cursor: pointer;
  outline: none;
  padding: 6px;
  border: 1px solid #64748b;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const SearchResultErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const ErrorImg = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const ErrorMsg = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-bottom: 10px;
`

export const ErrorInfo = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#424242')};
  margin-bottom: 20px;
`

export const RetryBtn = styled.button`
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

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const NoResultImg = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const NoResultText = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const NoResultInfo = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#424242')};
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

export const VideoItemLink = styled(Link)`
  cursor: pointer;
  outline: none;
  text-decoration: none;
`

export const ResultItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 30px;
  width: 370px;
  height: 400px;
`

export const ResultItemThumbnailImg = styled.img`
  width: 320px;
  margin-bottom: 15px;
`

export const ResultItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ResultItemChannelImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-right: 15px;
`

export const ResultItemTextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px;
`

export const ItemTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#313131')};
`

export const ViewsAndPublishedInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#313131')};
  margin-right: 20px;
`

export const PublishedAt = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#313131')};
  margin-left: 10px;
`
