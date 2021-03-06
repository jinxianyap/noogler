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
          <h4 className = "bigtext">Info 1</h4>
          <h4 className = "bigtext">Info 2</h4>
        </div>

        <div className = "box3">
          <div className = "box4NameTitle">

            <h1 id="pageHeading">
              <span style={{color: 'white', textAlign: "center", fontSize: 50}}>My </span>

              <span style={{color: '#4285F4', fontSize: 50}}>G</span>
              <span style={{color: '#DB4437', fontSize: 50}}>o</span>
              <span style={{color: '#F4B400', fontSize: 50}}>o</span>
              <span style={{color: '#4285F4', fontSize: 50}}>g</span>
              <span style={{color: '#0F9D58', fontSize: 50}}>l</span>
              <span style={{color: '#DB4437', fontSize: 50}}>e</span>
            </h1>
            <h1 style = {{ fontSize: 38}}>Jordan Edoinmioya</h1>
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
