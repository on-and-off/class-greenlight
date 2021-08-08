import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import MessageIcon from '@material-ui/icons/Message';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import Container from '../Container';
import ColorButton from '../ColorButton';

const QuestionIntro = ({ setPage }) => {
  const ColoredAvatar = withStyles(() => ({
    root: {
      backgroundColor: green[500],
    },
  }))(Avatar);

  const handleClick = (e) => {
    setPage(e.target.id);
  };

  return (
    <Container>
      <ColoredAvatar>
        <MessageIcon />
      </ColoredAvatar>
      <Title>질문 보내기</Title>
      <SquareGroup>
        <Square id="understand" onClick={handleClick}>
          이해했나요?
        </Square>
        <Square id="know" onClick={handleClick}>
          알고있나요?
        </Square>
        <Square id="done" onClick={handleClick}>
          다했나요?
        </Square>
        <Square id="free" onClick={handleClick}>
          자유질문
        </Square>
      </SquareGroup>
      <Link to="/teacher">홈으로 돌아가기</Link>
    </Container>
  );
};

export default QuestionIntro;

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

const SquareGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20rem;
  margin: 1rem 0;
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  margin: 1rem;
  border: 1px solid green;
  border-radius: 0.5rem;
  box-sizing: border-box;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
  cursor: pointer;
`;
