import React from "react";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import "./style.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import ProgramandInitiatives from './components/programandinitiativespage';
import Resorces from './components/resources';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/programsandinitiatives" element={<ProgramandInitiatives />} />
          <Route exact path="/resorces" element={<Resorces/>}/>
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
