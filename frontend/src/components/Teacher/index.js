import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as filledSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as outlinedSquare } from '@fortawesome/free-regular-svg-icons';
import Button from '@material-ui/core/Button';

export default function Teacher() {
  const [version, setVersion] = useState('beforeAsk');
  const [attendance, setAttendance] = useState(40);
  const [greenLight, setGreenLight] = useState(20);
  const [yellowLight, setYellowLight] = useState(15);
  const [redLight, setRedLight] = useState(5);

  const renderContent = () => {
    console.log(version);
    if (version === 'beforeAsk') {
      const beforeAskContent = [];
      beforeAskContent.push(
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: '2rem',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
          onClick={() => {
            setVersion('afterAsk');
          }}
        >
          {' '}
          학생들에게 요청을 보내보세요!
        </Button>,
      );
      return beforeAskContent;
    } else {
      const afterAskContent = [];
      afterAskContent.push(
        <SummaryContainer>
          <p>API를 이해했나요?</p>
          <p>87%</p>
        </SummaryContainer>,
      );
      return afterAskContent;
    }
  };

  const renderBlockGroup = () => {
    const blockGroupArray = [];
    if (version === 'beforeAsk') {
      for (var i = 0; i < attendance; i++) {
        blockGroupArray.push(
          <FontAwesomeIcon
            key={i}
            icon={filledSquare}
            style={{ color: '#ced6e0' }}
          />,
        );
      }
      return blockGroupArray;
    } else {
      for (var i = 0; i < greenLight; i++) {
        blockGroupArray.push(
          <FontAwesomeIcon
            key={i}
            icon={filledSquare}
            style={{ color: '#2ecc71' }}
          />,
        );
      }
      for (var i = 0; i < yellowLight; i++) {
        blockGroupArray.push(
          <FontAwesomeIcon
            key={i}
            icon={filledSquare}
            style={{ color: '#fbc531' }}
          />,
        );
      }
      for (var i = 0; i < redLight; i++) {
        blockGroupArray.push(
          <FontAwesomeIcon
            key={i}
            icon={filledSquare}
            style={{ color: '#e84118' }}
          />,
        );
      }
      return blockGroupArray;
    }
  };

  const renderGuide = () => {
    return (
      <GuideContainer>
        <p>
          <FontAwesomeIcon icon={filledSquare} style={{ color: '#2ecc71' }} /> :
          이해했어요!
        </p>
        <p>
          <FontAwesomeIcon icon={filledSquare} style={{ color: '#fbc531' }} /> :
          절반 정도 알겠어요!
        </p>
        <p>
          <FontAwesomeIcon icon={filledSquare} style={{ color: '#e84118' }} /> :
          다시 한번 설명해주세요!
        </p>
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
          <BlockContainer>
            <div>현재 출석 인원 : {attendance}명</div>
            <BlockGroup>{renderBlockGroup()}</BlockGroup>
          </BlockContainer>
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
  width: 100%;
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
`;

const BlockContainer = styled.div`
  text-align: center;
  margin: 1rem;
`;

const BlockGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  flex-wrap: wrap;
  width: 50%;
  font-size: 2rem;
  svg {
    padding: 1px;
  }
`;

const GuideContainer = styled.div`
  border-radius: 1rem;
  background: #ecf0f1;
  width: 50%;
  padding-inline: 1rem;
  margin: 1rem;
  p {
    margin: 1rem;
  }
`;
