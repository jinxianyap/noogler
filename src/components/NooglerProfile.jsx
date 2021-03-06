import React from 'react';
import MyNoogler from "./MyNoogler.jsx";
import Dashboard from "./Dashboard.jsx";
import Dashboardbox from "./Dashboardbox.jsx";

function NooglerProfile() {
  return(
    <div style={{backgroundColor: "#282c34",}}>
      <MyNoogler />
      <Dashboardbox/>
      <Dashboard/>
    </div>
  )
}

export default NooglerProfile;
