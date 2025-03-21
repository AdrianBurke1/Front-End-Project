import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
