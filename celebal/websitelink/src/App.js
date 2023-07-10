import './App.css';
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Link } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Brands } from './components/\Brands';
import { Contact } from './components/Contact';
import { Foot } from './components/Foot';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"about"} element={<About/>} />
      {/* <Route path={"brands"} element={<Brands/>} /> */}
      <Route path={"contact"} element={<Contact/>} />
      <Route path={"brands"} element={<Brands/>} />
      <Route path={"footer"} element={<Foot/>} />
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
