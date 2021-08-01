import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as filledSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as outlinedSquare } from '@fortawesome/free-regular-svg-icons';

export default function Block() {
  const [attendance, setAttendance] = useState(40);

  const renderBlockGroup = () => {
    const blockGroupArray = [];
    for (var i = 0; i < attendance; i++) {
      blockGroupArray.push(<FontAwesomeIcon key={i} icon={outlinedSquare} />);
    }
    return blockGroupArray;
  };

  return (
    <BlockContainer>
      <div>현재 출석 인원 : {attendance}명</div>
      {/* <FontAwesomeIcon icon={filledSquare} /> */}
      <BlockGroup>{renderBlockGroup()}</BlockGroup>
    </BlockContainer>
  );
}

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
