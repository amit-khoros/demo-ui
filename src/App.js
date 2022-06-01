import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components/macro';

import Home from 'containers/Home';
import Scheduler from 'containers/Scheduler';
import PaymentScreen from 'containers/PaymentScreens';


const Container = styled.div`
  display: flex;
  padding: 50px;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kroo/scheduler" element={<Scheduler />} />
        <Route path="*" element={<Home />} />
        <Route path="/kroo/payment" element={<PaymentScreen/>} />
      </Routes>
    </Container>
  );
}

export default App;
