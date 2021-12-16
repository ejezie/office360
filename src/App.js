import './App.scss';
import Navbar from './component/Navbar';
import React, { useState, useRef } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import CarouselComp from "./component/Carousel";


function App() {
  const [rotateBar, setRotatebar] = useState(false);

    const handleBar = () => {
      setRotatebar(!rotateBar);
    };

  return (
    <Router>
      <Navbar handleBar={handleBar} rotateBar={rotateBar} />
      <CarouselComp rotateBar={rotateBar} />
      <Home/>
    </Router>
  );
}

export default App;
