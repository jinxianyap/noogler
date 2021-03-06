import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatScreen from './components/chatscreen';

function App() {
  return (
    <div className="body">
      <div className="App">
        <ChatScreen />;
      </div>
    </div>
  );
}

export default App;
