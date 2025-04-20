import styled from 'styled-components'

export const LoginBgPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
    background-size: cover;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8fafc;
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 50px;
`

export const WebsiteLogo = styled.img`
    width: 180px;
    margin: 15px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`

export const LabelText = styled.label`
    font-family: 'Roboto';
    font-size: 16px;
    color: #424242;
    margin-bottom: 8px;
`

export const InputText = styled.input`
    font-family: 'Roboto';
    font-size: 24px;
    color: #212121;
    background-color: transparent;
    border: 1px solid #616e7c;
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 15px;
`

export const ShowPwdContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`

export const ShowPwdCheckBox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    cursor: pointer;
    outline: none;
`

export const ShowPwdText = styled.label`
    font-family: 'Roboto';
    font-size: 20px;
    color: #0f0f0f;
`

export const LoginBtn = styled.button`
    font-family: 'Roboto';
    font-size: 24px;
    color: #ffffff;
    background-color: #4f46e5;
    border: 1px solid #4f46e5;
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
    outline: none;
`

export const ErrorMsg = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: #ff0000;
`
