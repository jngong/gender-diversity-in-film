import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import {Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
      </Main>
        
      <Footer />
    </div>
  );
}

export default App;
