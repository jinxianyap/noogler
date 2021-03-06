import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNoogler from "./components/MyNoogler";
import Dashboard from './components/Dashboard';
import Dashboardbox from './components/Dashboardbox';

function App() {
  return (
    <div style={{backgroundColor: "#282c34",}}>
      <MyNoogler />
      <Dashboardbox/>
      <Dashboard/>

    </div>
  );
}

export default App;
