import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {IoMdSquare} from 'react-icons/io'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  TrendingPageContainers,
  TrendingPage,
  TrendingLoaderContainer,
  TrendingErrorContainer,
  TrendingErrorImg,
  TrendingErrorMessage,
  TrendingErrorInfo,
  TrendingRetryBtn,
  TrendingHeadingContainer,
  TrendingIcon,
  TrendingHeading,
  TrendingResultContainer,
  TrendingLinkItem,
  TrendingResultItemContainer,
  TrendingImg,
  TrendingItemInfoContainer,
  TrendingVideoTitle,
  TrendingChannelName,
  TrendingViewsPublishedContainer,
  TrendingViewsCount,
  TrendingPublishedAt,
} from './styledComponents'

class Trending extends Component {
  state = {trendingVideos: [], isLoading: false, hasError: false}

  componentDidMount() {
    this.getTrendingResults()
  }

  getTrendingResults = async () => {
    this.setState({isLoading: true, hasError: false})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({isLoading: false, trendingVideos: updatedData})
    } else {
      this.setState({isLoading: false, hasError: true})
    }
  }

  render() {
    const {trendingVideos, isLoading, hasError} = this.state
    return (
      <>
        <Header />
        <TrendingPageContainers>
          <Sidebar />
          <TrendingPage data-testid="trending">
            {isLoading && (
              <TrendingLoaderContainer data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#000000"
                  height={50}
                  width={50}
                />
              </TrendingLoaderContainer>
            )}
            {!isLoading && hasError && (
              <TrendingErrorContainer>
                <TrendingErrorImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                  alt="failure view"
                />
                <TrendingErrorMessage>
                  Oops! Something Went Wrong
                </TrendingErrorMessage>
                <TrendingErrorInfo>
                  We are having some trouble completing your request.
                  <br />
                  Please try again.
                </TrendingErrorInfo>
                <TrendingRetryBtn
                  type="button"
                  onClick={this.getTrendingResults}
                >
                  Retry
                </TrendingRetryBtn>
              </TrendingErrorContainer>
            )}
            {!isLoading && !hasError && (
              <>
                <TrendingHeadingContainer>
                  <TrendingIcon>
                    <HiFire size={20} />
                  </TrendingIcon>
                  <TrendingHeading>Trending</TrendingHeading>
                </TrendingHeadingContainer>
                <TrendingResultContainer>
                  {trendingVideos.map(item => (
                    <TrendingLinkItem to={`videos/${item.id}`}>
                      <TrendingResultItemContainer>
                        <TrendingImg
                          src={item.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <TrendingItemInfoContainer>
                          <TrendingVideoTitle>{item.title}</TrendingVideoTitle>
                          <TrendingChannelName>
                            {item.channel.name}
                          </TrendingChannelName>
                          <TrendingViewsPublishedContainer>
                            <TrendingViewsCount>
                              {item.viewCount} views
                            </TrendingViewsCount>
                            <IoMdSquare size={5} color="#606060" />
                            <TrendingPublishedAt>
                              {item.publishedAt}
                            </TrendingPublishedAt>
                          </TrendingViewsPublishedContainer>
                        </TrendingItemInfoContainer>
                      </TrendingResultItemContainer>
                    </TrendingLinkItem>
                  ))}
                </TrendingResultContainer>
              </>
            )}
          </TrendingPage>
        </TrendingPageContainers>
      </>
    )
  }
}

export default Trending
