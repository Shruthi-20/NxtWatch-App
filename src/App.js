import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import SavedVideosContext from './context/SavedVideosContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {savedVideosList: [], isDarkTheme: false}

  addVideosToSavedVideos = video => {
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedVideosList.some(
        savedVideo => savedVideo.id === video.id,
      )
      if (!isAlreadySaved) {
        return {savedVideosList: [...prevState.savedVideosList, video]}
      }
      return null
    })
  }

  deleteVideosFromSavedVideos = videoId => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(
        video => video.id !== videoId,
      ),
    }))
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {savedVideosList, isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{isDarkTheme, changeTheme: this.changeTheme}}
      >
        <SavedVideosContext.Provider
          value={{
            savedVideosList,
            addVideosToSavedVideos: this.addVideosToSavedVideos,
            deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
