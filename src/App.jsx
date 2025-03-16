import './App.css'
import React from 'react';
import NavBar from './NavBar';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Projects from './components/Projects/Project'
import Resume from './components/Resume/Resume'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
