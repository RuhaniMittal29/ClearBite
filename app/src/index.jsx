import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Analysis from "./components/Analysis/analysis.jsx";
import Diagnosis from './components/Diagnosis/diagnosis.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<App customComponent={Home}/>}/>
          <Route exact path="/analysis" element={<App customComponent={Analysis}/>}/>
          {/* <Route exact path="/diagnosis" element={<App customComponent={Diagnosis}></App>}></Route> */}
        </Routes>
      </Router>
  </React.StrictMode>
);