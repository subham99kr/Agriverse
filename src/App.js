import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import Search from './pages/Search'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<><Header/></>} />
          <Route path="/search" element={<><Header /><Search /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
