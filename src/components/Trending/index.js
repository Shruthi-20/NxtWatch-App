import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {IoMdSquare} from 'react-icons/io'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loaderColor = isDarkTheme ? '#ffffff' : '#000000'
          const errorImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          return (
            <>
              <Header />
              <TrendingPageContainers>
                <Sidebar />
                <TrendingPage data-testid="trending" isDarkTheme={isDarkTheme}>
                  {isLoading && (
                    <TrendingLoaderContainer data-testid="loader">
                      <Loader
                        type="ThreeDots"
                        color={loaderColor}
                        height={50}
                        width={50}
                      />
                    </TrendingLoaderContainer>
                  )}
                  {!isLoading && hasError && (
                    <TrendingErrorContainer>
                      <TrendingErrorImg src={errorImg} alt="failure view" />
                      <TrendingErrorMessage isDarkTheme={isDarkTheme}>
                        Oops! Something Went Wrong
                      </TrendingErrorMessage>
                      <TrendingErrorInfo isDarkTheme={isDarkTheme}>
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
                      <TrendingHeadingContainer isDarkTheme={isDarkTheme}>
                        <TrendingIcon>
                          <HiFire size={20} />
                        </TrendingIcon>
                        <TrendingHeading isDarkTheme={isDarkTheme}>
                          Trending
                        </TrendingHeading>
                      </TrendingHeadingContainer>
                      <TrendingResultContainer isDarkTheme={isDarkTheme}>
                        {trendingVideos.map(item => (
                          <TrendingLinkItem to={`videos/${item.id}`}>
                            <TrendingResultItemContainer>
                              <TrendingImg
                                src={item.thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <TrendingItemInfoContainer>
                                <TrendingVideoTitle isDarkTheme={isDarkTheme}>
                                  {item.title}
                                </TrendingVideoTitle>
                                <TrendingChannelName isDarkTheme={isDarkTheme}>
                                  {item.channel.name}
                                </TrendingChannelName>
                                <TrendingViewsPublishedContainer>
                                  <TrendingViewsCount isDarkTheme={isDarkTheme}>
                                    {item.viewCount} views
                                  </TrendingViewsCount>
                                  <IoMdSquare size={5} color="#606060" />
                                  <TrendingPublishedAt
                                    isDarkTheme={isDarkTheme}
                                  >
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
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
