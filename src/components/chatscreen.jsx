import React from "react";
import jordansPic from "../assets/jordansPic.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./chatscreen.css";

class ChatScreen extends React.Component {
  render() {
    return (
      <div className="chatscreen-page">
        <h1>
          <Badge
            variant="secondary"
            style={{
              colour: "white",
              backgroundColor: "#DB4437",
            }}
          >
            Chat
          </Badge>
        </h1>
        <Image
          src={jordansPic}
          roundedCircle
          style={{
            width: "200px",
            height: "250px",
            borderRadius: "50%",
            borderTop: "7px solid #DB4437",
            borderRight: "7px solid #4285F4",
            borderBottom: "7px solid #0F9D58",
            borderLeft: "7px solid #F4B400",
          }}
        />

        <div className="speech-box sb1">Hey! How can I help?</div>
          
        <div className="buttonsBar">
          <Button
            variant="primary"
            size="lg"
            className="buttonPlacement"
            style={{
              marginLeft: "60px",
              backgroundColor: "#4285F4",
              borderColor: "#4285F4",
            }}
          >
            Home
          </Button>
          <Button
            variant="success"
            size="lg"
            className="buttonPlacement"
            style={{
              backgroundColor: "#0F9D58",
              borderColor: "#0F9D58",
            }}
          >
            My Noogle
          </Button>{" "}
          <Button
            variant="warning"
            size="lg"
            className="buttonPlacement"
            style={{
              backgroundColor: "#F4B400",
              borderColor: "#F4B400",
            }}
          >
            Explore
          </Button>{" "}
          <Button
            variant="danger"
            size="lg"
            className="buttonPlacement"
            style={{
              backgroundColor: "#DB4437",
              borderColor: "#DB4437",
            }}
          >
            Help
          </Button>{" "}
        </div>
      </div>
    )
  }
}

export default ChatScreen;
