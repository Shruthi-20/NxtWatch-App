import {Component} from 'react'
import {IoMdSearch, IoMdSquare} from 'react-icons/io'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import ThemeContext from '../../context/ThemeContext'
import {
  BgHomePage,
  HomePageContainers,
  PopupAndResultsContainer,
  SearchResultsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  SearchResultErrorContainer,
  ErrorImg,
  ErrorMsg,
  ErrorInfo,
  RetryBtn,
  NoResultsContainer,
  NoResultImg,
  NoResultText,
  NoResultInfo,
  ResultsContainer,
  VideoItemLink,
  ResultItemContainer,
  ResultItemThumbnailImg,
  ResultItemInfoContainer,
  ResultItemChannelImg,
  ResultItemTextInfoContainer,
  ItemTitle,
  ChannelName,
  ViewsAndPublishedInfoContainer,
  ViewsCount,
  PublishedAt,
} from './styledComponents'

class Home extends Component {
  state = {
    searchInput: '',
    resultList: {total: 0, videos: []},
    isLoading: false,
    hasError: false,
  }

  componentDidMount() {
    this.getSearchResults()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = async () => {
    this.setState({isLoading: true, hasError: false})
    console.log('Fetching...')
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log('Got response...')
    const data = await response.json()
    console.log(data)
    console.log('Got data...')
    if (response.ok) {
      const updatedData = {
        total: data.total,
        videos: data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        })),
      }
      this.setState({
        isLoading: false,
        resultList: updatedData,
        hasError: false,
      })
    } else {
      this.setState({isLoading: false, hasError: true})
    }
  }

  render() {
    const {searchInput, resultList, isLoading, hasError} = this.state
    const {total, videos} = resultList
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <BgHomePage>
        <Header />
        <HomePageContainers data-testid="home">
          <Sidebar />
          <PopupAndResultsContainer>
            <Banner />
            <SearchResultsContainer>
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  onClick={this.getSearchResults}
                >
                  <IoMdSearch size={20} />
                </SearchButton>
              </SearchContainer>
              {isLoading && (
                <LoaderContainer data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#000000"
                    height="50"
                    width="50"
                  />
                </LoaderContainer>
              )}
              {!isLoading && hasError && (
                <SearchResultErrorContainer>
                  <ErrorImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    alt="failure view"
                  />
                  <ErrorMsg>Oops! Something Went Wrong</ErrorMsg>
                  <ErrorInfo>
                    We are having some trouble completing your request.
                    <br />
                    Please try again.
                  </ErrorInfo>
                  <RetryBtn type="button" onClick={this.getSearchResults}>
                    Retry
                  </RetryBtn>
                </SearchResultErrorContainer>
              )}
              {!isLoading && !hasError && videos.length === 0 && (
                <NoResultsContainer>
                  <NoResultImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <NoResultText>No Search Results Found</NoResultText>
                  <NoResultInfo>
                    Try different key words or remove search filter
                  </NoResultInfo>
                  <RetryBtn type="button" onClick={this.getSearchResults}>
                    Retry
                  </RetryBtn>
                </NoResultsContainer>
              )}
              {!isLoading && !hasError && videos.length > 0 && (
                <ResultsContainer>
                  {videos.map(item => (
                    <VideoItemLink to={`/videos/${item.id}`}>
                      <ResultItemContainer key={item.id}>
                        <ResultItemThumbnailImg
                          src={item.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <ResultItemInfoContainer>
                          <ResultItemChannelImg
                            src={item.channel.profileImageUrl}
                            alt="channel logo"
                          />
                          <ResultItemTextInfoContainer>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ChannelName>{item.channel.name}</ChannelName>
                            <ViewsAndPublishedInfoContainer>
                              <ViewsCount>{item.viewCount} views</ViewsCount>
                              <IoMdSquare size={5} color="#606060" />
                              <PublishedAt>{item.publishedAt}</PublishedAt>
                            </ViewsAndPublishedInfoContainer>
                          </ResultItemTextInfoContainer>
                        </ResultItemInfoContainer>
                      </ResultItemContainer>
                    </VideoItemLink>
                  ))}
                </ResultsContainer>
              )}
            </SearchResultsContainer>
          </PopupAndResultsContainer>
        </HomePageContainers>
      </BgHomePage>
    )
  }
}

export default Home
