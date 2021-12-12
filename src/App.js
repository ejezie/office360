import './App.scss';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Drawer from './component/Drawer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Drawer/>
    </Router>
  );
}

export default App;
