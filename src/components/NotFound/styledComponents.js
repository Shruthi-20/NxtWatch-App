import styled from 'styled-components'

export const NotFoundPageContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  margin-top: 10px;
  height: auto;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 1200px;
  margin-left: 280px;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const NotFoundImage = styled.img`
  width: 300px;
  padding-top: 15px;
`
export const NotFoundText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
`
