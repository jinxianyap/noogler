import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div style={{marginLeft: '100px'}}>
      <Container fluid="md" >
        <Row md={3}>
          <Col style={{ marginTop: "20px" }}>
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

          <Col style={{ marginTop: "20px" }}>
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

          <Col style={{ marginTop: "20px" }}>
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
