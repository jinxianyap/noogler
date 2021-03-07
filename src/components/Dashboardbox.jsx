import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaGoogleDrive } from 'react-icons/fa';
import { SiGooglecalendar } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';


const Dashboardbox = () => {
  return (
    <div>
      <Container fluid="md" style={{marginTop: '40px'}}>
        <Row md={3}>
          <Col style={{ marginTop: "20px", marginLeft: "0px" }}>
            <Card style={{ width: "40rem" }}>
              <Card.Body style = {{ backgroundColor: "#F4B400" }}>
                <h5 style={{ fontWeight: "bold" }}>Dashboard</h5>
                <Card.Text>My events</Card.Text>

                <section>
                  <div className='row'>
                    <div className='col-4'>
                    <h6>                      
                      <a href="https://learndigital.withgoogle.com/digitalgarage/courses">
                      Training
                      </a>
                    </h6>
                    <RiTeamFill size = {24} />
                    </div>
                    <div className='col-4'>
                    <h6>
                      <a href = "https://calendar.google.com/calendar/u/0/r">
                      View my Calendar         
                      </a>
                    </h6>
                    <SiGooglecalendar size = {23} />
                    </div>
                    <div className='col-4'>
                    <h6>
                      <a href="https://accounts.google.com/ServiceLogin?service=wise&passive=true&continue=http%3A%2F%2Fdrive.google.com%2F%3Futm_source%3Den&utm_medium=button&utm_campaign=web&utm_content=gotodrive&usp=gtd&ltmpl=drive">
                      Saved recorded events
                      </a>
                    </h6>
                    <FaGoogleDrive size = {23} />
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
