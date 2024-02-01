import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ShowDetails from './components/showDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:showId" element={<showDetails />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
