import {Component} from 'react'
import {IoMdSquare} from 'react-icons/io'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  VideoItemDetailsPage,
  VideoItemPageContainers,
  VideoItemDetailResultContainer,
  VideoItemResult,
  ItemVideo,
  VideoTitle,
  ViewsAndButtonsContainer,
  ViewsAndPublishedInfoContainer,
  ViewsCount,
  PublishedAt,
  VideoItemButtonsContainer,
  LikeBtn,
  DislikeBtn,
  SaveBtn,
  Seperator,
  ChannelInfoContainer,
  ChannelLogo,
  VideoItemChannelContainer,
  VideoChannelName,
  VideoChannelSubscribers,
  VideoItemChannelDescription,
  VideoItemLoaderContainer,
  VideoItemErrorContainer,
  VideoItemErrorImg,
  VideoItemErrorMessage,
  VideoItemErrorInfo,
  VideoItemRetryBtn,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    isLoading: true,
    hasError: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({isLoading: true, hasError: false})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    if (!jwtToken) {
      return <Redirect to="/login" />
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscribersCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
      }
      this.setState({
        videoDetails: updatedVideoDetails,
        isLoading: false,
        hasError: false,
      })
    } else {
      this.setState({hasError: true, isLoading: false})
    }
  }

  toggleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isLiked ? prevState.isDisliked : false,
    }))
  }

  toggleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isDisliked ? prevState.isLiked : false,
    }))
  }

  render() {
    const {videoDetails, isLoading, hasError, isLiked, isDisliked} = this.state

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {
            savedVideosList,
            addVideosToSavedVideos,
            deleteVideosFromSavedVideos,
          } = value

          const isSaved = savedVideosList.some(
            video => video.id === videoDetails.id,
          )

          const toggleSave = () => {
            if (isSaved) {
              deleteVideosFromSavedVideos(videoDetails.id)
            } else {
              addVideosToSavedVideos(videoDetails)
            }
          }

          return (
            <>
              <Header />
              <VideoItemDetailsPage>
                <VideoItemPageContainers>
                  <Sidebar />
                  <VideoItemDetailResultContainer>
                    {isLoading && (
                      <VideoItemLoaderContainer data-testid="loader">
                        <Loader
                          type="ThreeDots"
                          color="#000000"
                          height={50}
                          width={50}
                        />
                      </VideoItemLoaderContainer>
                    )}
                    {!isLoading && hasError && (
                      <VideoItemErrorContainer>
                        <VideoItemErrorImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                          alt="failure view"
                        />
                        <VideoItemErrorMessage>
                          Oops! Something Went Wrong
                        </VideoItemErrorMessage>
                        <VideoItemErrorInfo>
                          We are having some trouble completing your request.
                          <br />
                          Please try again.
                        </VideoItemErrorInfo>
                        <VideoItemRetryBtn
                          type="button"
                          onClick={this.getVideoDetails}
                        >
                          Retry
                        </VideoItemRetryBtn>
                      </VideoItemErrorContainer>
                    )}
                    {!isLoading && !hasError && (
                      <VideoItemResult data-testid="videoItemDetails">
                        <ItemVideo url={videoDetails.videoUrl} controls />
                        <VideoTitle>{videoDetails.title}</VideoTitle>
                        <ViewsAndButtonsContainer>
                          <ViewsAndPublishedInfoContainer>
                            <ViewsCount>
                              {videoDetails.viewCount} views
                            </ViewsCount>
                            <IoMdSquare size={5} color="#606060" />
                            <PublishedAt>
                              {videoDetails.publishedAt}
                            </PublishedAt>
                          </ViewsAndPublishedInfoContainer>
                          <VideoItemButtonsContainer>
                            <LikeBtn
                              type="button"
                              onClick={this.toggleLike}
                              color={isLiked ? '#2563eb' : '#64748b'}
                            >
                              <AiOutlineLike size={20} />
                              Like
                            </LikeBtn>
                            <DislikeBtn
                              type="button"
                              onClick={this.toggleDislike}
                              color={isDisliked ? '#2563eb' : '#64748b'}
                            >
                              <BiDislike size={20} />
                              Dislike
                            </DislikeBtn>
                            <SaveBtn
                              type="button"
                              onClick={toggleSave}
                              color={isSaved ? '#2563eb' : '#64748b'}
                            >
                              <RiPlayListAddFill size={20} />
                              {isSaved ? 'Saved' : 'Save'}
                            </SaveBtn>
                          </VideoItemButtonsContainer>
                        </ViewsAndButtonsContainer>
                        <Seperator />
                        <ChannelInfoContainer>
                          <ChannelLogo
                            src={videoDetails.channel.profileImageUrl}
                            alt="channel logo"
                          />
                          <VideoItemChannelContainer>
                            <VideoChannelName>
                              {videoDetails.channel.name}
                            </VideoChannelName>
                            <VideoChannelSubscribers>
                              {videoDetails.channel.subscribersCount}{' '}
                              subscribers
                            </VideoChannelSubscribers>
                            <VideoItemChannelDescription>
                              {videoDetails.description}
                            </VideoItemChannelDescription>
                          </VideoItemChannelContainer>
                        </ChannelInfoContainer>
                      </VideoItemResult>
                    )}
                  </VideoItemDetailResultContainer>
                </VideoItemPageContainers>
              </VideoItemDetailsPage>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default VideoItemDetails
