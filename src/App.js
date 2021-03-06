import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatScreen from './components/chatscreen';
import ExploreGoogle from './components/exploreGoogle';

function App() {
  return (
    <div className="body">
      <div className="App">
        <ExploreGoogle />
      </div>
    </div>
  );
}

export default App;
