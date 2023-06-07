import './styling/App.css'
import Login from './pages/login.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Schedule from './pages/schedule';
import DetailPage from './pages/details';
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Dashboard />} />
          <Route path="/Home2" element={<Home  />}  />
          <Route path="/Planner" element={<Schedule  />} />
          <Route path="/Details" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
