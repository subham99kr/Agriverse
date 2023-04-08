import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Search from './pages/Search'
import Signup from './pages/Signup'
import News from './pages/News'
import Help from './pages/Help'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Team from './pages/Team';
import Cart from './pages/Cart.js'
import Weather from './pages/Weather';

function App() {
  
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/news" element={<><Header /><News /></>} />
        <Route path="/weather" element={<><Header /><Weather /></>} />
        <Route path="/help" element={<><Header /><Help /></>} />
        <Route path="/login" element={<><Header /><Login /></>} />
        <Route path="/signup" element={<><Header /><Signup/></>} />
        <Route path="/search" element={<><Header /><Search /></>} />
        <Route path="/register" element={<><Header /><Register /></>} />
        <Route path="/cart" element={<><Header /><Cart /></>} />
        <Route path="/team" element={<><Header /><Team /></>} />
      </Routes>
    </Router>
  );
}

export default App;
