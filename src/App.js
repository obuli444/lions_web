import React from "react";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import "./style.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import ProgramandInitiatives from "./components/programandinitiativespage";
import Resorces from "./components/resources";
import { Routes, Route } from "react-router-dom";
import Ourmentor from "./components/ourdistrict/ourmentor";
import Governorsteam from "./components/ourdistrict/governorsteam";
import Cabinetofficials from './components/ourdistrict/cabinetofficials';
import Governorcalendar from './components/ourdistrict/governorcalendar';
import Internationpresidentteam from './components/ourdistrict/Internationalpresidentteam';
import Aboutus from './components/ourdistrict/aboutus';
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/programsandinitiatives"
            element={<ProgramandInitiatives />}
          />
          <Route exact path="/resorces" element={<Resorces />} />
          <Route exact path="/Ourmentor" element={<Ourmentor />} />
          <Route exact path="/Governorsteam" element={<Governorsteam />} />
          <Route exact path="/Cabinetofficials" element={<Cabinetofficials />} />
          <Route exact path="/Governorcalendar" element={<Governorcalendar />} />
          <Route exact path="/IntlPresidentteam" element={<Internationpresidentteam />} />
          <Route exact path="/aboutus" element={<Aboutus />} />

        </Routes>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
