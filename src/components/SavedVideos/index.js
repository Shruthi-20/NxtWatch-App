import {Component} from 'react'
import {RiPlayListAddFill} from 'react-icons/ri'
import {IoMdSquare} from 'react-icons/io'
import Header from '../Header'
import Sidebar from '../Sidebar'
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
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList} = value

          return (
            <>
              <Header />
              <SavedVideosPageContainers>
                <Sidebar />
                <SavedVideosPage data-testid="savedVideos">
                  {savedVideosList.length === 0 ? (
                    <SavedVideosErrorContainer>
                      <SavedVideosErrorImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <SavedVideosErrorMessage>
                        No saved videos found
                      </SavedVideosErrorMessage>
                      <SavedVideosErrorInfo>
                        You can save your videos while watching them
                      </SavedVideosErrorInfo>
                    </SavedVideosErrorContainer>
                  ) : (
                    <>
                      <SavedVideosHeadingContainer>
                        <SavedVideosIcon>
                          <RiPlayListAddFill size={20} />
                        </SavedVideosIcon>
                        <SavedVideosHeading>Saved Videos</SavedVideosHeading>
                      </SavedVideosHeadingContainer>
                      <SavedVideosResultContainer>
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
                                <SavedVideosVideoTitle>
                                  {item.title}
                                </SavedVideosVideoTitle>
                                <SavedVideosChannelName>
                                  {item.channel.name}
                                </SavedVideosChannelName>
                                <SavedVideosViewsPublishedContainer>
                                  <SavedVideosViewsCount>
                                    {item.viewCount} views
                                  </SavedVideosViewsCount>
                                  <IoMdSquare size={5} color="#606060" />
                                  <SavedVideosPublishedAt>
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
  }
}

export default SavedVideos
