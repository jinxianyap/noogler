import React from "react";
import "./exploreGoogle.css";

class ExploreGoogle extends React.Component {
  render() {
    return (
      <div className="exploregoogle-page">
        <header className="App-header">
          <h1 id="pageHeading">Explore 

            {/* google logo colouring */}

            <span style={{ color: "#4285F4" }}> G</span>
            <span style={{ color: "#DB4437" }}>o</span>
            <span style={{ color: "#F4B400" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#0F9D58" }}>l</span>
            <span style={{ color: "#DB4437" }}>e</span>
          </h1>
        </header>
      </div>
    );
  }
}

export default ExploreGoogle;
