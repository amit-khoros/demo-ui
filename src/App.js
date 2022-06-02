import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components/macro';

import Home from 'containers/Home';
import Scheduler from 'containers/Scheduler';
import { SCHEDULER_PATH } from 'constants/routes';

const Container = styled.div`
  display: flex;
  padding: 50px;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={SCHEDULER_PATH} element={<Scheduler />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
