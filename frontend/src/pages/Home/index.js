import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../../components/Container';
import ColorButton from '../../components/ColorButton';

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Title>에듀라이트</Title>
      <Description>비대면 교육 실시간 소통 서비스</Description>
      <EduLightIcon src="./icon.svg" alt="icon" />
      <ColorButton
        variant="contained"
        size="large"
        onClick={() => {
          history.push('/create');
        }}
      >
        수업 만들기 &gt;
      </ColorButton>
    </Container>
  );
};

export default Home;

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
