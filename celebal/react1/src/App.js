import './App.css';
import { Navigation } from './component/Navigation';
import { Body1 } from './component/Body1';
import { Foot } from './component/Foot';

function App() {
  return (
    <>
      <div className="background-container">
        <Navigation />
        <div className="nav-title">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <div className="nav-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <Body1 />
      <Foot/>
    </>
  );
}

export default App;
