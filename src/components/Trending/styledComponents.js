import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingPageContainers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    margin-top: 10px;
    height: auto;
`

export const TrendingPage = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 280px;
    padding-left: 40px;
    background-color: #f8fafc;
    width: 1200px;
    min-height: 100vh;
    height: auto;
`

export const TrendingLoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export const TrendingErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
`

export const TrendingErrorImg = styled.img`
    width: 200px;
    margin-bottom: 10px;
`

export const TrendingErrorMessage = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color:  #000000;
`

export const TrendingErrorInfo = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color:  #424242;
    margin-bottom: 20px;
`

export const TrendingRetryBtn = styled.button`
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

export const TrendingHeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f1f5f9;
    margin-left: 0px;
    padding-left: 30px;
`

export const TrendingIcon = styled.p`
    background-color: #000000;
    color: #ff0000;
    padding: 10px;
    border-radius: 40px;
    margin-right: 15px;
`

export const TrendingHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: bold;
    color: #000000;
`

export const TrendingResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    background-color: #f8fafc;
`

export const TrendingLinkItem = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    outline: none;
`

export const TrendingResultItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`

export const TrendingImg = styled.img`
    width: 300px;
    height: 200px;
    margin-right: 15px;
`

export const TrendingItemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TrendingVideoTitle = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: #181818;
`

export const TrendingChannelName = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: #424242;
`

export const TrendingViewsPublishedContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const TrendingViewsCount = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: #313131;
    margin-right: 20px;
`

export const TrendingPublishedAt = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: #313131;
    margin-left: 10px;
`
