import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home';
import FixedSocial from './Components/FixedSocial';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      < Header />
      < Home />
      < Footer />
      < FixedSocial />
    </div>
  );
}

export default App;
