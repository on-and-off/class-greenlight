import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as filledSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as outlinedSquare } from '@fortawesome/free-regular-svg-icons';
import Block from './block';
import Button from '@material-ui/core/Button';

export default function Teacher() {
  return (
    <RootContainer>
      <TotalContainer>
        <ArrowBackIosIcon></ArrowBackIosIcon>
        <MainContainer>
          <InfoContainer>
            <p style={{ fontWeight: 'bold' }}>KDT Web 1주차-1</p>
            <p>2021.06.23 13:00 - 15:00</p>
            <p>강의자: 김철수 교수님</p>
          </InfoContainer>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '2rem' }}
          >
            학생들에게 요청을 보내보세요!
          </Button>
          <Block />
        </MainContainer>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </TotalContainer>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  margin: 5rem auto;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 1rem;
  width: 100%;
  height: 40rem;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  text-align: center;
  line-height: 1.5rem;
  margin: 1rem;
  p {
    margin: 0;
  }
`;
