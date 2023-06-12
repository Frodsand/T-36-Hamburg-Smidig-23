import React from 'react';
import './styling/App.css'
import Login from './pages/login.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Schedule from './pages/schedule';
import DetailPage from './pages/details';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
    const {user} = useAuthContext()
    console.log("this is user", user)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={user ? <Dashboard /> : <Login />}/>
          <Route path="/Planner" element={user ? <Schedule /> : <Login />} />
          <Route path="/Details" element={user ? <DetailPage /> : <Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;