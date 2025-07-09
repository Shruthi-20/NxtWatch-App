import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarContainer,
  PageOptionsContainer,
  OptionLink,
  OptionContainer,
  OptionHeading,
  ContactInfoContainer,
  ContactHeading,
  ContactAppsContainer,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  ContactMsg,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
          <PageOptionsContainer>
            <OptionLink to="/" isDarkTheme={isDarkTheme}>
              <OptionContainer>
                <AiFillHome
                  size={25}
                  color={isDarkTheme ? '#f9f9f9' : '#181818'}
                />
                <OptionHeading isDarkTheme={isDarkTheme}>Home</OptionHeading>
              </OptionContainer>
            </OptionLink>
            <OptionLink to="/trending" isDarkTheme={isDarkTheme}>
              <OptionContainer>
                <HiFire size={25} color={isDarkTheme ? '#f9f9f9' : '#181818'} />
                <OptionHeading isDarkTheme={isDarkTheme}>
                  Trending
                </OptionHeading>
              </OptionContainer>
            </OptionLink>
            <OptionLink to="/gaming" isDarkTheme={isDarkTheme}>
              <OptionContainer>
                <SiYoutubegaming
                  size={25}
                  color={isDarkTheme ? '#f9f9f9' : '#181818'}
                />
                <OptionHeading isDarkTheme={isDarkTheme}>Gaming</OptionHeading>
              </OptionContainer>
            </OptionLink>
            <OptionLink to="/saved-videos" isDarkTheme={isDarkTheme}>
              <OptionContainer>
                <RiPlayListAddFill
                  size={25}
                  color={isDarkTheme ? '#f9f9f9' : '#181818'}
                />
                <OptionHeading isDarkTheme={isDarkTheme}>
                  Saved Videos
                </OptionHeading>
              </OptionContainer>
            </OptionLink>
          </PageOptionsContainer>
          <ContactInfoContainer>
            <ContactHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactHeading>
            <ContactAppsContainer>
              <FacebookLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <TwitterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <LinkedinLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactAppsContainer>
            <ContactMsg isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your <br />
              channels and <br />
              recommendations!
            </ContactMsg>
          </ContactInfoContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Sidebar)
