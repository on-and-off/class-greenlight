import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const ColorButton = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const Home = () => {
  return (
    <Container>
      <Title>에듀라이트</Title>
      <Description>비대면 교육 실시간 소통 서비스</Description>
      <EduLightIcon src="./icon.svg" alt="icon" />
      <ColorButton variant="contained" size="large">
        수업 만들기 &gt;
      </ColorButton>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  @font-face {
    font-family: 'TmoneyRoundWindRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  width: 16rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  margin: 0 auto;
  font-family: 'TmoneyRoundWindRegular';
  font-weight: 400;
`;

const Title = styled.h1`
  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'TmoneyRoundWindExtraBold', sans-serif;
  font-weight: 800;
  font-size: 2.7rem;
  margin-bottom: 0;
`;

const Description = styled.h4`
  margin-bottom: 3rem;
`;

const EduLightIcon = styled.img`
  width: 5rem;
  margin-bottom: 3rem;
`;
