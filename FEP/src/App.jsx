import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import About from "./Components/About"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route />
          <Route path="/about" element={<About />} />  {/* Add route for About page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
