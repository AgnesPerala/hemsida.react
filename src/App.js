import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="site-container">
        <header className="site-header">
          <Menu/>
        </header>
        <main className= 'site-content'>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/Portfolio' element={<Portfolio />}/>
          </Routes>
        </main>
        <footer className='site-footer'>
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}
