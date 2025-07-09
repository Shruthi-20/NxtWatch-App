import styled from 'styled-components'

export const BannerBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 1200px;
  height: 210px;
  margin-left: 10px;
  margin-top: 10px;
`

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const WebsiteLogo = styled.img`
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const BannerInfo = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #181818;
`

export const GetItNowBtn = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  color: #181818;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: transparent;
  border: 1px solid #181818;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  outline: none;
`
