import React from 'react';
import MyNoogler from "./MyNoogler.jsx";
import Dashboard from "./Dashboard.jsx";
import Dashboardbox from "./Dashboardbox.jsx";
import "./NooglerProfile.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function NooglerProfile() {
  return(
    <div className = "box1">
        <div className = "box2">
          <MyNoogler />
          <div className = "info-box">
            <p className="info-title">Email Address</p>
            <p className="info-detail">jordan@gmail.com</p>
            <p className="info-title">Date of Birth</p>
            <p className="info-detail">7 March 2021</p>
            <p className="info-title">Gender</p>
            <p className="info-detail">M</p>
          </div>
        </div>

        <div className = "box3">
          <div className = "box4NameTitle">

            <h1 id="pageHeading">
              <span style={{color: 'white', textAlign: "center", fontSize: 115}}>My </span>

              <span style={{color: '#4285F4', fontSize: 115}}>N</span>
              <span style={{color: '#DB4437', fontSize: 115}}>o</span>
              <span style={{color: '#F4B400', fontSize: 115}}>o</span>
              <span style={{color: '#4285F4', fontSize: 115}}>g</span>
              <span style={{color: '#0F9D58', fontSize: 115}}>l</span>
              <span style={{color: '#DB4437', fontSize: 115}}>e</span>
            </h1>
            <h1 style = {{ fontSize: 38}}>Jordan Edoimioya</h1>
            <h1 style = {{ fontSize: 30}}>Software Engineer L4</h1>


          </div>

          <div className = "box5Dashboard">
            <Dashboardbox />
          </div>

          <div className = "box6Cards">
            <Dashboard />
          </div>
        </div>
      </div>
  )
}

export default NooglerProfile;
