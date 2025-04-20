import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {
  BannerBg,
  BannerTextContainer,
  WebsiteLogo,
  BannerInfo,
  BannerCloseBtn,
  GetItNowBtn,
} from './styledComponents'

class Banner extends Component {
  state = {isBannerVisible: true}

  onClickBannerCloseBtn = () => {
    this.setState({isBannerVisible: false})
  }

  render() {
    const {isBannerVisible} = this.state

    if (!isBannerVisible) {
      return null
    }

    return (
      <BannerBg data-testid="banner">
        <BannerTextContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerInfo>
            Buy Nxt Watch Premium prepaid plans with <br />
            UPI
          </BannerInfo>
          <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
        </BannerTextContainer>
        <BannerCloseBtn
          type="button"
          onClick={this.onClickBannerCloseBtn}
          data-testid="close"
        >
          <IoMdClose size={25} />
        </BannerCloseBtn>
      </BannerBg>
    )
  }
}

export default Banner
