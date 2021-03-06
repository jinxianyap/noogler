import React, {useState} from "react";
import "./exploreGoogle.css";
import { Tabs, Tab, Card, Container, Row, Col, Modal } from 'react-bootstrap';
import dummyImage from "../assets/jordansPic.jpeg";
import Button from 'react-bootstrap/Button';
import { groupsData, eventsData, opportunitiesData } from "./exploreGoogleData";

class ExploreGoogle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      clicked: false
    };
    this.setShow = (val) => {
      this.setState({show: val});
    };

    this.setClick = (val) =>{
      this.setState({clicked: val});
    };
    this.groups = groupsData;
    this.events = eventsData;
    this.opportunities = opportunitiesData;
  }
  
  getCard(data, key) {
    return (
      <Col xs={3} key={key} className="item-cols">
        <Card onClick={() => this.setShow(true)}>
          <Card.Img variant="top" src={data.img} />
          <Card.Body className="card-text">
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.shortDesc}
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={this.state.show}
          onHide={() => {this.setShow(false); this.setClick(false);}}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {data.desc}
          </p>
          <Button
            size="lg"
            className="joinButtonPlacement"
            style = {this.state.clicked
              ?
              { 
                alignItems: 'center',
                backgroundColor: "grey",
                borderColor: "grey",                   
              }
              : 
              { alignItems: 'center',
                backgroundColor: "#0F9D58",
                borderColor: "#0F9D58"         
              }}
            onClick = {() => this.setClick(true)}
            disabled = {this.state.clicked}
          >
            {this.state.clicked ? "Pending Confirmation" : "Join" } 
          </Button>
        </Modal.Body>
      </Modal>
      </Col>
    );
  }

  generateGrid(data) {
    var rows = [];
    for (var i = 0; i < data.length; i = i + 4) {
      var row = <Row>
        {data.slice(i, i+4).map((dt, key) => this.getCard(dt, key))}
      </Row>;
      rows.push(row);
    }
    return (
      <Container className="item-cards">
        {rows}
      </Container>
    );
  }

  render() {
    return (
      <div className="exploregoogle-page">
        <header className="App-header">
          <h1 id="pageHeading">
            Explore
            {/* google logo colouring */}
            <span style={{ color: "#4285F4" }}> G</span>
            <span style={{ color: "#DB4437" }}>o</span>
            <span style={{ color: "#F4B400" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#0F9D58" }}>l</span>
            <span style={{ color: "#DB4437" }}>e</span>
          </h1>
        </header>
        <div className="explore-content">
          <Tabs defaultActiveKey="groups" id="explore-tab-group">
            <Tab eventKey="groups" title="Groups" className="explore-tabs">
                {this.generateGrid(this.groups)}
            </Tab>
            <Tab eventKey="events" title="Events" className="explore-tabs">
              
            </Tab>
            <Tab eventKey="opportunities" title="Opportunities" className="explore-tabs">
            
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ExploreGoogle;
