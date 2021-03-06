import React from "react";
import "./exploreGoogle.css";
import { Tabs, Tab } from 'react-bootstrap';

class ExploreGoogle extends React.Component {
  render() {
    return (
      <div className="exploregoogle-page">
        <header className="App-header">
          <h1 id="pageHeading">
            Explore
            {/* google logo colouring */}
            <span style={{ color: "#4285F4" }}> G</span>
            <span style={{ color: "#DB4437" }}>o</span>
            <span style={{ color: "#F4B400" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#0F9D58" }}>l</span>
            <span style={{ color: "#DB4437" }}>e</span>
          </h1>
        </header>
        <div className="explore-content">
          <Tabs defaultActiveKey="groups" id="explore-tab-group">
            <Tab eventKey="groups" title="Groups" className="explore-tabs">
              <h2>fdsfs</h2>
            </Tab>
            <Tab eventKey="events" title="Events" className="explore-tabs">
            </Tab>
            <Tab eventKey="opportunities" title="Opportunities" className="explore-tabs">
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ExploreGoogle;
