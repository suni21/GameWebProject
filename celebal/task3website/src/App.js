import './App.css';

import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { Brand } from './components/Brand';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Foot } from './components/Foot';
// import { Main } from './components/Main';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/brand" element={<Brand />} />
        <Route exact path="/cboutUs" element={<AboutUs />} />
        <Route exact path="/contactUs" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      {/* <Navigation /> */}
      {/* <div className="background-container">
        <div className="title">b 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className='head-container'>
        <h1> Expolre our world! </h1>
        </div>
      </div> */}
      <Brand/>
      <Foot/>
    </>
  );
}

export default App;