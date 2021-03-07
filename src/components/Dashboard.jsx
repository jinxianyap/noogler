import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import './Dashboard.css';
import michellePic from '../assets/michelle.jpeg';
import BGN from '../assets/BGNlogo.jpg';
import VR from '../assets/vrEvening.JPG';


const Dashboard = () => {
  return (
    <div className = "animate__animated animate__fadeIn animate__delay-3s">
      <Container fluid="md" >
        <Row md={3}>
          <Col className = "cardSpacing">
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img
                variant="top"
                src={michellePic}
                style={{ height: "60%" }}
              />
              <Card.Body>
                <Card.Text>
                  Catch up on Michelle Obama's speech last week
                </Card.Text>
                <Button variant="primary" onClick = {(e) => {
                  e.preventDefault();
                  window.location.href='https://www.youtube.com/watch?v=St1aRfh2RV4&t=549s ';
                }}>View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className = "cardSpacing">
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img
                variant="top"
                src={BGN}
                style={{ height: "60%" }}
              />
              <Card.Body>
                <Card.Text>
                  Upcoming events: Volunteer at the BGN Hackathon 2021
                </Card.Text>
                <Button variant="primary" onClick = {(e) => {
                  e.preventDefault();
                  window.location.href='https://diversity.google/';
                }}>View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className = "cardSpacing">
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img
                variant="top"
                src={VR}
                style={{ height: "60%" }}
              />
              <Card.Body>
                <Card.Text>
                  Explore Virtual Reality and Computer-generated stimulation
                </Card.Text>
                <Button variant="primary" onClick = {(e) => {
                  e.preventDefault();
                  window.location.href='https://arvr.google.com/vr/';
                }}>View</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
