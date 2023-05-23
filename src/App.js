import React from 'react';
import './App.css';
import Header from './components/header';
import Homepage from './components/homepage';
import Footer from './components/footer';
import './style.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       

function App() {
  return <React.Fragment>
    <Header/>
    <Homepage/>
    <Footer/>
  </React.Fragment>
}

export default App;
