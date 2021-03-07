import React from 'react';
import MyNoogler from "./MyNoogler.jsx";
import Dashboard from "./Dashboard.jsx";
import Dashboardbox from "./Dashboardbox.jsx";
import { Link } from "react-router-dom";
import "./NooglerProfile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImLocation } from 'react-icons/im';
import { MdDateRange } from 'react-icons/md';



function NooglerProfile() {
  return(
    <div className = "box1">
        <div className = "box2 ">
          <MyNoogler />
          <div className = "info-box animate__animated animate__fadeIn animate__delay-2s">
            <h3 style={{color: "#282c34", fontWeight: "600"}}>My Details</h3>
            <p className="info-detail">Jordan</p>
            <p className="info-detail">Edoimioya</p>
            <p className="info-detail"><MdDateRange /> 09/10/2001</p>
            <p className="info-detail"><ImLocation /> London, UK</p>
            <p className="info-detail">Ethnicity: Black African</p>
            <p className="info-detail">Nationality: British 🇬🇧</p>
          </div>

          <Link to="/chat" className="noogler-links btn btn-primary btn-lg active animate__animated animate__fadeIn animate__delay-3s" style={{backgroundColor: "#DB4437", border: "1px solid #DB4437", marginTop: "7%"}}>Chat</Link>
          <Link to="/" className="noogler-links btn btn-primary btn-lg active animate__animated animate__fadeIn animate__delay-3s" style={{backgroundColor: "#F4B400", border: "1px solid #F4B400"}}>Explore</Link>
          </div>

        <div className = "box3">
          <div className = "box4NameTitle">

            <h1 className = "animate__animated animate__fadeIn" id="pageHeading">
              <span style={{color: 'white', textAlign: "center", fontSize: 115}}>NetSocial </span>

              <span style={{color: '#4285F4', fontSize: 115}}>G</span>
              <span style={{color: '#DB4437', fontSize: 115}}>o</span>
              <span style={{color: '#F4B400', fontSize: 115}}>o</span>
              <span style={{color: '#4285F4', fontSize: 115}}>g</span>
              <span style={{color: '#0F9D58', fontSize: 115}}>l</span>
              <span style={{color: '#DB4437', fontSize: 115}}>e</span>
            </h1>

            <h1 className = "animate__animated animate__fadeIn animate__delay-1s" style = {{ fontSize: 38}}>Jordan Edoimioya</h1>
            <h1 className = "animate__animated animate__fadeIn animate__delay-1s" style = {{ fontSize: 30}}>Software Engineer intern </h1>


          </div>

          <div className = "box5Dashboard animate__animated animate__fadeIn animate__delay-2s">
            <Dashboardbox />
          </div>

          <div className = "box6Cards animate__animated animate__fadeIn animate__delay-2s">
            <Dashboard />
          </div>
        </div>
      </div>
  )
}

export default NooglerProfile;
