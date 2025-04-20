import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundPageContainers,
  NotFoundImage,
  NotFoundContainer,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <div>
          <Header />
          <NotFoundPageContainers>
            <Sidebar />
            <NotFoundContainer theme={theme}>
              <NotFoundImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <NotFoundText theme={theme}>Page Not Found</NotFoundText>
              <NotFoundText as="p" theme={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </NotFoundPageContainers>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
