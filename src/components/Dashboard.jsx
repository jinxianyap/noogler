import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import './Dashboard.css';
import michellePic from '../assets/michelle.jpeg';
import volunteering from '../assets/volunteering.jpeg';

const Dashboard = () => {
  return (
    <div >
      <Container fluid="md" >
        <Row md={3}>
          <Col className = "cardSpacing" style={{ marginTop: "20px" }}>
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

          <Col className = "cardSpacing" style={{ marginTop: "20px" }}>
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

          <Col className = "cardSpacing" style={{ marginTop: "20px" }}>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://rg-group.co.uk/wp-content/uploads/2019/08/CareHome1.jpg"
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
