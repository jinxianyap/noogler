import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
const Dashboardbox = () => {
  return (
    <div>
      <Container fluid="md" style={{marginTop: '40px'}}>
        <Row md={3}>
          <Col style={{ marginTop: "20px", marginLeft: "300px" }}>
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <h5>Dashboard</h5>
                <Card.Text>Your recently activity</Card.Text>

                <section>
                  <div className='row'>
                    <div className='col-4'>
                    <h6>
                      Viewed Oppotunities
                    </h6>
                    </div>
                    <div className='col-4'>
                    <h6>
                      Saved Oppotunities
                    </h6>
                    </div>
                    <div className='col-4'>
                    <h6>
                      Think about it
                    </h6>
                    </div>
                  </div>
                </section>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboardbox;
