import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import Container from '../../components/Container';
import CreateForm from '../../components/CreateForm';

const Create = () => {
  const ColoredAvatar = withStyles(() => ({
    root: {
      backgroundColor: green[500],
    },
  }))(Avatar);

  return (
    <Container>
      <ColoredAvatar>
        <CreateIcon />
      </ColoredAvatar>
      <Title>수업 만들기</Title>
      <CreateForm />
    </Container>
  );
};

export default Create;

const Title = styled.h2`
  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'TmoneyRoundWindExtraBold', sans-serif;
  font-weight: 800;
`;
