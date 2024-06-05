import Admin from "./components/admin";
import Student from "./components/student";
import FacultyTest from "./components/FacultyTest";
import Results from "./components/results";
import TextGenerator from "./components/Textgenerator";
import ResultDownload from "./components/ResultDownload";
import Test from "./components/test";
import Room from "./components/room";
import Home from "./components/home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/forgotpassword";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RouteWithBackground component={Home} />} />
        <Route path='/room' element={<RouteWithBackground component={Room} />} />
        <Route path='/signin' element={<RouteWithBackground component={SignIn} />} />
        <Route path='/signup' element={<RouteWithBackground component={SignUp} />} />
        <Route path='/forgotpassword' element={<RouteWithBackground component={ForgotPassword} />} />
        <Route path='/create-room' element={<RouteWithBackground component={Admin} />} />
        <Route path='/student' element={<RouteWithBackground component={Student} />} />
        <Route path='/Faculttest' element={<RouteWithBackground component={FacultyTest} />} />
        <Route path='/Results' element={<RouteWithBackground component={Results} />} />
        <Route path='/selftest' element={<RouteWithBackground component={TextGenerator} />} />
        <Route path='/test' element={<RouteWithBackground component={Test} />} />
        <Route path='/Results-Download' element={<RouteWithBackground component={ResultDownload} />} />
      </Routes>
    </Router>
  );
}

function RouteWithBackground({ component: Component, ...rest }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  console.log(isHome)
  return (
    <div className={isHome ? 'HOME' : 'home-background'}>
      <Component {...rest} />
    </div>
  );
}

export default App;
