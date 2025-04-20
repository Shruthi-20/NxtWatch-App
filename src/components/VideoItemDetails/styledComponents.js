import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoItemDetailsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`

export const VideoItemPageContainers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    margin-top: 10px;
    height: auto;
`

export const VideoItemDetailResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 280px;
    padding-left: 40px;
    background-color: #f1f5f9;
    width: 1200px;
    min-height: 100vh;
    height: auto;
`

export const VideoItemResult = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
`

export const ItemVideo = styled(ReactPlayer)`
    width: 1000px;
    margin-bottom: 20px;
`

export const VideoTitle = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    color: #000000;
    margin-bottom: 20px;
`

export const ViewsAndButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ViewsAndPublishedInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ViewsCount = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: #313131;
    margin-right: 20px;
`

export const PublishedAt = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: #313131;
    margin-left: 10px;
`

export const VideoItemButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LikeBtn = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.color || '#64748b'};
    cursor: pointer;
    outline: none;
    margin-right: 20px;
`

export const DislikeBtn = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.color || '#64748b'};
    cursor: pointer;
    outline: none;
    margin-right: 20px;
`
export const SaveBtn = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.color || '#64748b'};
    cursor: pointer;
    outline: none;
    margin-right: 20px;
`

export const Seperator = styled.hr`
    width: 1100px;
    border: 1px solid #313131;
    margin-bottom: 20px;
`

export const ChannelInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ChannelLogo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 20px;
`

export const VideoItemChannelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const VideoChannelName = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: #0f0f0f;
    margin-bottom: 10px;
`

export const VideoChannelSubscribers = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: #313131;
`

export const VideoItemChannelDescription = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: #313131;
`
export const VideoItemLoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const VideoItemErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
`

export const VideoItemErrorImg = styled.img`
    width: 200px;
    margin-bottom: 20px;
`

export const VideoItemErrorMessage = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color:  #000000;
`

export const VideoItemErrorInfo = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color:  #424242;
    margin-bottom: 20px;
`

export const VideoItemRetryBtn = styled.button`
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
