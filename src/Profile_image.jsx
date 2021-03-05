import React from 'react';
import Image from 'react-bootstrap/Image';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture1 from "./Picture1.jpg";

function Profile_image() {
  return (
    <div>
  <Container>
  <Row>

    <Col xs={6} md={4}>
      <Image src={Picture1} roundedCircle />
    </Col>
  </Row>
</Container>


  </div>);
}
export default Profile_image;
