import './App.scss';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Slider from './component/Slider';

function App() {
  return (
    <Router>
      <Navbar/>
      <Slider/>
    </Router>
  );
}

export default App;
