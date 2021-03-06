import React from "react";
import jordansPic from "../assets/jordansCirclePic.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import "./chatscreen.css";

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#F4B400',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0F9D58',
  botFontColor: '#fff',
  userBubbleColor: '#4285F4',
  userFontColor: '#fff',
};

const steps = [
  {
    id: '1',
    message: 'Hey Noogler! What are you looking for?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Join a ERG', trigger: '3' },
      { value: 2, label: 'Find an opportunity', trigger: '3' },
      { value: 3, label: 'Look at a Speaker event', trigger: '3' },
      { value: 4, label: 'See the FAQ', trigger: '4' },
    ],
  },
  {
    id: '3',
    message: 'Nice! Close this window and press the yellow Explore button to get started',
    end: true,
  },
  {
    id: '4',
    message: 'No worries! Here is some common Qs',
    trigger: "5",
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'What is an ERG?', trigger: '6' },
      { value: 2, label: 'Where can I find suitable ERGs?', trigger: '7' },
      { value: 3, label: 'How do I change my contact details?', trigger: '8' },
      { value: 4, label: 'I need specific help', trigger: '9' },
      { value: 5, label: 'I am okay now', trigger: '10' },
    ],
  },
  {
    id: '6',
    message: 'Groups for employees to join! Any other Qs?',
    trigger: "5",
  },
  {
    id: '7',
    message: 'Press the yellow Explore button, they are in there!',
    trigger: "5",
  },
  {
    id: '8',
    message: 'Press the green My Noogler button!',
    trigger: "5",
  },
  {
    id: '9',
    message: 'Okay! Please email notRealEmail@google.com for more specific help!',
    end: true,
  },
  {
    id: '10',
    message: 'Sweet! Glad to hear that!',
    end: true,
  },
];


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
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            borderTop: "7px solid #DB4437",
            borderRight: "7px solid #4285F4",
            borderBottom: "7px solid #0F9D58",
            borderLeft: "7px solid #F4B400",
          }}
        />

        <div className="speech-box sb1">Hey! How can I help? Open the yellow chat box to talk!</div>

        <ThemeProvider theme={theme} className = "themeCenter">
          <ChatBot
            steps={steps}
            floating = {true}
            floatingStyle = {{
              left: 'calc(50% - 28px)',
              right: 'initial',
              transformOrigin: "bottom center",
              borderRadius: 0,
            }}
            style = {{
              left: 'calc(50% - 175px)',
            }}
          />
        </ThemeProvider>


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
            onClick = {(e) => {
              e.preventDefault();
              window.location.href='http://google.com';
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
            onClick = {(e) => {
              e.preventDefault();
              window.location.href='http://google.com';
            }}
          >
            My Noogle
          </Button>
          <Button
            variant="warning"
            size="lg"
            className="buttonPlacement"
            style={{
              backgroundColor: "#F4B400",
              borderColor: "#F4B400",
            }}
            onClick = {(e) => {
              e.preventDefault();
              window.location.href='http://google.com';
            }}
          >
            Explore
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="buttonPlacement"
            style={{
              backgroundColor: "#DB4437",
              borderColor: "#DB4437",
            }}
            onClick = {(e) => {
              e.preventDefault();
              window.location.href='http://google.com';
            }}
          >
            Help
          </Button>
        </div>
      </div>
    )
  }
}

export default ChatScreen;
