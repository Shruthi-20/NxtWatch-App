import {Component} from 'react'
import {RiPlayListAddFill} from 'react-icons/ri'
import {IoMdSquare} from 'react-icons/io'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SavedVideosPageContainers,
  SavedVideosPage,
  SavedVideosErrorContainer,
  SavedVideosErrorImg,
  SavedVideosErrorMessage,
  SavedVideosErrorInfo,
  SavedVideosHeadingContainer,
  SavedVideosIcon,
  SavedVideosHeading,
  SavedVideosResultContainer,
  SavedVideosLinkItem,
  SavedVideosResultItemContainer,
  SavedVideosImg,
  SavedVideosItemInfoContainer,
  SavedVideosVideoTitle,
  SavedVideosChannelName,
  SavedVideosViewsPublishedContainer,
  SavedVideosViewsCount,
  SavedVideosPublishedAt,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeValue => {
          const {isDarkTheme} = themeValue
          return (
            <SavedVideosContext.Consumer>
              {value => {
                const {savedVideosList} = value

                return (
                  <>
                    <Header />
                    <SavedVideosPageContainers>
                      <Sidebar />
                      <SavedVideosPage
                        data-testid="savedVideos"
                        isDarkTheme={isDarkTheme}
                      >
                        {savedVideosList.length === 0 ? (
                          <SavedVideosErrorContainer>
                            <SavedVideosErrorImg
                              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                              alt="no saved videos"
                            />
                            <SavedVideosErrorMessage isDarkTheme={isDarkTheme}>
                              No saved videos found
                            </SavedVideosErrorMessage>
                            <SavedVideosErrorInfo isDarkTheme={isDarkTheme}>
                              You can save your videos while watching them
                            </SavedVideosErrorInfo>
                          </SavedVideosErrorContainer>
                        ) : (
                          <>
                            <SavedVideosHeadingContainer
                              isDarkTheme={isDarkTheme}
                            >
                              <SavedVideosIcon>
                                <RiPlayListAddFill size={20} />
                              </SavedVideosIcon>
                              <SavedVideosHeading isDarkTheme={isDarkTheme}>
                                Saved Videos
                              </SavedVideosHeading>
                            </SavedVideosHeadingContainer>
                            <SavedVideosResultContainer
                              isDarkTheme={isDarkTheme}
                            >
                              {savedVideosList.map(item => (
                                <SavedVideosLinkItem
                                  to={`/videos/${item.id}`}
                                  key={item.id}
                                >
                                  <SavedVideosResultItemContainer>
                                    <SavedVideosImg
                                      src={item.thumbnailUrl}
                                      alt="video thumbnail"
                                    />
                                    <SavedVideosItemInfoContainer>
                                      <SavedVideosVideoTitle
                                        isDarkTheme={isDarkTheme}
                                      >
                                        {item.title}
                                      </SavedVideosVideoTitle>
                                      <SavedVideosChannelName
                                        isDarkTheme={isDarkTheme}
                                      >
                                        {item.channel.name}
                                      </SavedVideosChannelName>
                                      <SavedVideosViewsPublishedContainer>
                                        <SavedVideosViewsCount
                                          isDarkTheme={isDarkTheme}
                                        >
                                          {item.viewCount} views
                                        </SavedVideosViewsCount>
                                        <IoMdSquare size={5} color="#606060" />
                                        <SavedVideosPublishedAt
                                          isDarkTheme={isDarkTheme}
                                        >
                                          {item.publishedAt}
                                        </SavedVideosPublishedAt>
                                      </SavedVideosViewsPublishedContainer>
                                    </SavedVideosItemInfoContainer>
                                  </SavedVideosResultItemContainer>
                                </SavedVideosLinkItem>
                              ))}
                            </SavedVideosResultContainer>
                          </>
                        )}
                      </SavedVideosPage>
                    </SavedVideosPageContainers>
                  </>
                )
              }}
            </SavedVideosContext.Consumer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
