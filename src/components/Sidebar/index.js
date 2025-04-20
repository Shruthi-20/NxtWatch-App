import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
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
  <SidebarContainer>
    <PageOptionsContainer>
      <OptionLink to="/">
        <OptionContainer>
          <AiFillHome size={25} />
          <OptionHeading>Home</OptionHeading>
        </OptionContainer>
      </OptionLink>
      <OptionLink to="/trending">
        <OptionContainer>
          <HiFire size={25} />
          <OptionHeading>Trending</OptionHeading>
        </OptionContainer>
      </OptionLink>
      <OptionLink to="/gaming">
        <OptionContainer>
          <SiYoutubegaming size={25} />
          <OptionHeading>Gaming</OptionHeading>
        </OptionContainer>
      </OptionLink>
      <OptionLink to="/saved-videos">
        <OptionContainer>
          <RiPlayListAddFill size={25} />
          <OptionHeading>Saved Videos</OptionHeading>
        </OptionContainer>
      </OptionLink>
    </PageOptionsContainer>
    <ContactInfoContainer>
      <ContactHeading>CONTACT US</ContactHeading>
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
      <ContactMsg>
        Enjoy! Now to see your <br />
        channels and <br />
        recommendations!
      </ContactMsg>
    </ContactInfoContainer>
  </SidebarContainer>
)

export default withRouter(Sidebar)
