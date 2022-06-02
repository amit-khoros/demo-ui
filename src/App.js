import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import Home from 'containers/Home';
import Scheduler from 'containers/Scheduler';
import PaymentScreen from 'containers/PaymentScreens';
import CarouselScreen from 'containers/CaraouselScreen';
import Weatherapi from 'components/weather/Weather';
import Restaurants from 'components/restaurants/Restaurants';
import { SCHEDULER_PATH,PAYMENT_PATH ,CAROUSEL_PATH,WEATHER_PATH,RESTAURANTS_PATH} from 'constants/routes';

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
        <Route path={PAYMENT_PATH} element={<PaymentScreen/>} />
        <Route path={CAROUSEL_PATH} element={<CarouselScreen/>} />
        <Route path={WEATHER_PATH} element={<Weatherapi/>} />
        <Route path={RESTAURANTS_PATH} element={<Restaurants/>} />

      </Routes>
    </Container>
  );
}

export default App;
