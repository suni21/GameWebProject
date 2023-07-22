import './App.css';
import { Route, Routes, BrowserRouter,Navigate } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Home } from './components/Home';
import Login from './components/Login';
import { Contact } from './components/Contacts';



const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

const PrivateRouteForLogin = ({ children }) => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    return children;
  } else {
    return <Navigate to={"/Home"} />;
  }
};

const App=()=> {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path={"/login"} element={
            <PrivateRouteForLogin><Login /></PrivateRouteForLogin>
          } />
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/Home"} element={
            <PrivateRoute><Home /></PrivateRoute>
          } />         
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

