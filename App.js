import React from 'react';
import './App.css';
import Header from './Components/Header';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Happiness from './Components/Happiness';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Happiness/>} />
      </Routes>
      </Router>
        
    </div>
  );
}

export default App;
