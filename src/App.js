import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'containers/Home';
import Scheduler from 'containers/Scheduler';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kroo/scheduler" element={<Scheduler />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
