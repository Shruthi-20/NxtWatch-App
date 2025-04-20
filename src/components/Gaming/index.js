import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingPageContainers,
  GamingPage,
  GamingLoaderContainer,
  GamingErrorContainer,
  GamingErrorImg,
  GamingErrorMessage,
  GamingErrorInfo,
  GamingRetryBtn,
  GamingHeadingContainer,
  GamingIcon,
  GamingHeading,
  GamingResultContainer,
  GamingLinkItem,
  GamingResultItemContainer,
  GamingImg,
  GamingItemInfoContainer,
  GamingVideoTitle,
  GamingViewsCount,
} from './styledComponents'

class Gaming extends Component {
  state = {gamingVideos: [], isLoading: false, hasError: false}

  componentDidMount() {
    this.getGamingResults()
  }

  getGamingResults = async () => {
    this.setState({isLoading: true, hasError: false})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({isLoading: false, gamingVideos: updatedData})
    } else {
      this.setState({isLoading: false, hasError: true})
    }
  }

  render() {
    const {gamingVideos, isLoading, hasError} = this.state
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme}) => {
          const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#ffffff' : '#000000'

          return (
            <>
              <Header />
              <GamingPageContainers>
                <Sidebar />
                <GamingPage data-testid="gaming" style={{backgroundColor}}>
                  {isLoading && (
                    <GamingLoaderContainer data-testid="loader">
                      <Loader
                        type="ThreeDots"
                        color={textColor}
                        height={50}
                        width={50}
                      />
                    </GamingLoaderContainer>
                  )}
                  {!isLoading && hasError && (
                    <GamingErrorContainer>
                      <GamingErrorImg
                        src={
                          isDarkTheme
                            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                        }
                        alt="failure view"
                      />
                      <GamingErrorMessage style={{color: textColor}}>
                        Oops! Something Went Wrong
                      </GamingErrorMessage>
                      <GamingErrorInfo style={{color: textColor}}>
                        We are having some trouble completing your request.
                        <br />
                        Please try again.
                      </GamingErrorInfo>
                      <GamingRetryBtn
                        type="button"
                        onClick={this.getGamingResults}
                      >
                        Retry
                      </GamingRetryBtn>
                    </GamingErrorContainer>
                  )}
                  {!isLoading && !hasError && (
                    <>
                      <GamingHeadingContainer>
                        <GamingIcon>
                          <SiYoutubegaming size={20} />
                        </GamingIcon>
                        <GamingHeading style={{color: textColor}}>
                          Gaming
                        </GamingHeading>
                      </GamingHeadingContainer>
                      <GamingResultContainer>
                        {gamingVideos.map(item => (
                          <GamingLinkItem
                            to={`videos/${item.id}`}
                            key={item.id}
                          >
                            <GamingResultItemContainer>
                              <GamingImg
                                src={item.thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <GamingItemInfoContainer>
                                <GamingVideoTitle style={{color: textColor}}>
                                  {item.title}
                                </GamingVideoTitle>
                                <GamingViewsCount style={{color: textColor}}>
                                  {item.viewCount} Watching Worldwide
                                </GamingViewsCount>
                              </GamingItemInfoContainer>
                            </GamingResultItemContainer>
                          </GamingLinkItem>
                        ))}
                      </GamingResultContainer>
                    </>
                  )}
                </GamingPage>
              </GamingPageContainers>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
