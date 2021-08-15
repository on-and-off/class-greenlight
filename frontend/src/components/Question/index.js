import React, { useState } from 'react';
import Container from '../Container';
import QuestionIntro from './QuestionIntro';
import QuestionContent from './QuestionContent';

const Question = () => {
  const [page, setPage] = useState(null);
  return (
    <Container>
      {!page && <QuestionIntro setPage={setPage} />}
      {page && <QuestionContent page={page} setPage={setPage} />}
    </Container>
  );
};

export default Question;
