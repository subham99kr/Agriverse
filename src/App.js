import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import Search from './pages/Search'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><Home/></>} />
          <Route path="/search" element={<><Header /><Search /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
