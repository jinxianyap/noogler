import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import './Dashboard.css';
import michellePic from '../assets/michelle.jpeg';
import volunteering from '../assets/volunteering.jpeg';
import googleOffice from '../assets/googleOffice.jpeg';

const Dashboard = () => {
  return (
    <div >
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
                src={volunteering}
                style={{ height: "60%" }}
              />
              <Card.Body>
                <Card.Text>
                  Clean-up of the Dodder Park area with local volunteers
                </Card.Text>
                <Button variant="primary" onClick = {(e) => {
                  e.preventDefault();
                  window.location.href='https://www.leavenotraceireland.org/corporate-volunteering-google-staff-help-local-community/ ';
                }}>View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className = "cardSpacing">
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img
                variant="top"
                src={googleOffice}
                style={{ height: "60%" }}
              />
              <Card.Body>
                <Card.Text>
                  Lessons from an MBA intern turned full-time Googler
                </Card.Text>
                <Button variant="primary" onClick = {(e) => {
                  e.preventDefault();
                  window.location.href='http://google.com';
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
