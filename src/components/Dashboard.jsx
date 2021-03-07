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
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={michellePic}
                style={{ height: 125 }}
              />
              <Card.Body>
                <Card.Text>
                  Click to view more information about Residents
                </Card.Text>
                <Button variant="primary">View Residents</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className = "cardSpacing">
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={volunteering}
                style={{ height: 125 }}
              />
              <Card.Body>
                <Card.Text>
                  Click to view more information about Residents
                </Card.Text>
                <Button variant="primary">View Residents</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className = "cardSpacing">
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={googleOffice}
                style={{ height: 125 }}
              />
              <Card.Body>
                <Card.Text>
                  Click to view more information about Residents
                </Card.Text>
                <Button variant="primary">View Residents</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
