import React from 'react';
import './App.css';
import { LeftSide } from './features/sides/LeftSide/LeftSide';
import { RightSide } from './features/sides/RightSide/RightSide';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page1 } from './features/pages/page1/page1';
import { MiddleSide } from './features/sides/MiddleSide/MiddleSide';
function App() {
  return (
    <div className='Sides'>
      <BrowserRouter>
        <LeftSide />
        <div className='MiddleSideItems'>
          <MiddleSide />
          <Routes>
            <Route path='page1' element={<Page1 />} />
          </Routes>
        </div>
        <Routes></Routes>
      </BrowserRouter>
      <RightSide />
    </div>
  );
}

export default App;
