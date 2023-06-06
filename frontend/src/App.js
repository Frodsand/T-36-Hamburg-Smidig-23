import React from 'react';
import './styling/App.css'
import Login from './pages/login.js'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Schedule from './pages/schedule';
import DetailPage from './pages/details';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Dashboard />} />
          <Route path="/Planner" element={<Schedule />} />
          <Route path="/Details" element={<DetailPage />} />
        </Routes>
    </>
  );
}

export default App;
