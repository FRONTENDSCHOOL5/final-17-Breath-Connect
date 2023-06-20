import React from 'react';
import styled from 'styled-components';
import SnsLogo from '../../assets/images/login-logo.svg';
import { Link } from 'react-router-dom';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

const SnsLoginPage = () => {
  return (
    <SnsLoginContainer>
      <h1 className='a11y-hidden'>Sns 로그인 페이지</h1>
      <SnsMainLogo src={SnsLogo} alt='들숨날숨 로고'/>
      <SnsLoginMain>
            <button className='kakao-login'>
              <GlovalSprite id='message-circle'/>
              카카오톡 계정으로 로그인</button>
            <button className='google-login'>
              <GlovalSprite id='google-g-logo-1'/>
              구글 계정으로 로그인</button>
            <button className='facebook-login'>
              <GlovalSprite id='facebook'/>
              페이스북 계정으로 로그인</button>
        <SnsLoginLink>
        <LoginLink to='/login'>이메일로 로그인</LoginLink>
        <SignupLink to='/signup'>회원가입</SignupLink>
      </SnsLoginLink>
      </SnsLoginMain>
      
      </SnsLoginContainer>
  )
}

export default SnsLoginPage;

const SnsLoginContainer = styled.main`
  background-color: ${({theme}) => theme.colors.mainColor};
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
`

const SnsMainLogo = styled.img`
  width: 20rem;
  height: 20rem;
  margin-top: 10rem;
`

const SnsLoginMain = styled.section`
  width: 100%;
  height: 42%;
  position: absolute;
  bottom: 0;
  border-radius: 2rem 2rem 0 0;
  padding: 5rem 3.4rem;
  background: ${({theme}) => theme.colors.whiteText};
  button {
    display: block;
    padding: 1rem;
    border-radius: 4.4rem;
    width: 100%;
    height: 24%;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.medium};
    margin-bottom: 1rem;
  } 
  .kakao-login {
    border: 0.1rem solid ${({theme}) => theme.colors.kakaoColor};
  }
  .google-login {
    border: 0.1rem solid ${({theme}) => theme.colors.googleColor}
  }
  .facebook-login {
    border: 0.1rem solid ${({theme}) => theme.colors.facebookColor};
    margin-bottom: 2rem;
  }
`

const SnsLoginLink = styled.div`
text-align: center;
color: ${({theme}) => theme.colors.textColor};
font-size: ${({theme}) => theme.fontSize.small};
`

const LoginLink = styled(Link)`
&:after {
  content: '|';
  padding: 1rem;
  color: ${({theme}) => theme.colors.placeHolderColor};
}
`

const SignupLink = styled(Link)`
`