import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as filledSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as outlinedSquare } from '@fortawesome/free-regular-svg-icons';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import GroupIcon from '@material-ui/icons/Group';

export default function Student() {
  const [version, setVersion] = useState('beforeResponse');

  const renderContent = () => {
    if (version === 'beforeResponse') {
      const beforeResponseContent = [];
      beforeResponseContent.push(
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: '2rem',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
          onClick={() => {
            setVersion('afterResponse');
          }}
        >
          {' '}
          교사의 요청에 응답해보세요!
        </Button>,
      );
      return beforeResponseContent;
    } else {
      const afterResponseContent = [];
      afterResponseContent.push(
        <SummaryContainer>
          <p>API를 이해했나요?</p>
          <p className="myResonpose">이해했어요!</p>
        </SummaryContainer>,
      );
      return afterResponseContent;
    }
  };

  const renderGuide = () => {
    return (
      <GuideContainer>
        <div>
          <GroupIcon></GroupIcon>
          <p>선생님께 나의 이해도를 알려주세요!</p>
        </div>
        <div>
          <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
          <p>다 이해해다면 수업이 효율적으로 진행돼요!</p>
        </div>
        <div>
          <EmojiPeopleIcon></EmojiPeopleIcon>
          <p>아직 잘 모르겠다면 부연설명이 가능해요!</p>
        </div>
      </GuideContainer>
    );
  };

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
          {renderContent()}
          <LoadingContainer>
            <CircularProgress></CircularProgress>
            <p>요청을 기다리는 중입니다...</p>
          </LoadingContainer>
          {renderGuide()}
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
  min-width: 120%;
  height: 45rem;
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

const SummaryContainer = styled.div`
  text-align: center;
  line-height: 1.5rem;
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .myResonpose {
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    background: #2ecc71;
    width: 20rem;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  margin: 1rem;
  margin: 1rem auto;
  width: 60%;
  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const BlockGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  flex-wrap: wrap;
  width: 50%;
  font-size: 2rem;
`;

const GuideContainer = styled.div`
  border-radius: 1rem;
  background: #ecf0f1;
  width: 70%;
  padding: 1rem;
  div {
    height: 3rem;
    display: flex;
    align-items: center;
    padding-inline: 1rem;
  }
  p {
    margin: 0.5rem;
  }
`;
