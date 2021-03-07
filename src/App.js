import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatScreen from './components/chatscreen';
import ExploreGoogle from './components/exploreGoogle';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <div className="App">
        <Switch>
          <Route path="/" component={ExploreGoogle} exact />
          <Route path="/chat" component={ChatScreen} />
          {/* <Route path="/myNoogler" component={MyNoogler} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
