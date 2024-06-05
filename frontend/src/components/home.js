import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
const Home = () => {
  return (
    <div className="container HOME">
      <div className="background-image" />
      <div className="buttons">
        <Link to="/SignIn" className="button" style={{marginTop:'500px'}}>Sign In</Link>
        <span className="space" />
        <Link to="/SignUp" className="button">Sign Up</Link> 
      </div>
    </div>
  );
};

export default Home;
