import React from 'react';
import './styling/App.css'
import Login from './pages/login.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Schedule from './pages/schedule';
import DetailPage from './pages/details';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Dashboard />} />
          <Route path="/Details" element={<DetailPage />} />
          <Route path="/Planner" element={<Schedule  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
