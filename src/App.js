import './App.scss';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Slider from './component/Slider';
import CarouselComp from "./component/Carousel";


function App() {
  return (
    <Router>
      <Navbar />
      {/* <Slider/> */}
      <CarouselComp />
    </Router>
  );
}

export default App;
