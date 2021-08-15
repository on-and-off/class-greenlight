import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  ColorButton,
  YellowButton,
  RedButton,
  BlackButton,
} from '../ColorButton';
import data from './data';

const QuestionContent = ({ page, setPage }) => {
  return (
    <>
      <Title>
        <div>
          <Input />
          을/를
        </div>
        <div>{data[page].q}</div>
      </Title>
      {page === 'free' ? (
        <>자유문항</>
      ) : (
        <ButtonGroup>
          <ColorButton>{data[page].a}</ColorButton>
          <YellowButton>{data[page].b}</YellowButton>
          <RedButton>{data[page].c}</RedButton>
        </ButtonGroup>
      )}

      <BlackButton size="large">질문 보내기 &gt;</BlackButton>
      <Link onClick={() => setPage(null)}>다른 질문 보내기</Link>
    </>
  );
};

export default QuestionContent;

const Title = styled.h3`
  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'TmoneyRoundWindExtraBold', sans-serif;
  font-weight: 800;
  text-align: center;

  div {
    margin-top: 0.5rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0 0.5rem;
  border-radius: 0.2rem;
  border: 0.1rem #c4c4c4 solid;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`;
