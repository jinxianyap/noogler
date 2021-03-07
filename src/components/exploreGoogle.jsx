import React, {useState} from "react";
import "./exploreGoogle.css";
import { Tabs, Tab, Card, Container, Row, Col, Modal } from 'react-bootstrap';
import dummyImage from "../assets/jordansPic.jpeg";
import Button from 'react-bootstrap/Button';
import { groupsData, eventsData, opportunitiesData } from "./exploreGoogleData";
import { Link } from "react-router-dom";

class ExploreGoogle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: new Map(),
      clicked: false
    };

    this.setShow = (key, val) => {
      var map = this.state.show;
      map[key] = val;
      this.setState({show: map});
    };

    this.setClick = (val) =>{
      this.setState({clicked: val});
    };

    this.groups = groupsData;
    this.events = eventsData;
    this.opportunities = opportunitiesData;

    this.groups.forEach((dt, key) => {
      var map = this.state.show;
      map[dt.name] = false;
      this.setState({show: map});
    });

    this.events.forEach((dt, key) => {
      var map = this.state.show;
      map[dt.name] = false;
      this.setState({show: map});
    });

    this.opportunities.forEach((dt, key) => {
      var map = this.state.show;
      map[dt.name] = false;
      this.setState({show: map});
    });
  }

  getCard(data, key) {
    return (
      <Col xs={3} key={key} className="item-cols" style={{padding: "0.5rem"}}>
        <Card onClick={() => this.setShow(data.name, true)} style={{height: "100%"}}>
          <Card.Img variant="top" src={data.img}/>
          <Card.Body className="card-text">
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.shortDesc}
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={this.state.show[data.name]}
          onHide={() => {this.setShow(data.name, false); setTimeout(() => this.setClick(false), 500)}}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Members: {data.members}</p>
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

  generateGrid(data, key_prefix) {
    var rows = [];
    for (var i = 0; i < data.length; i = i + 4) {
      var row = <Row key={rows.length} className ="animate__animated animate__fadeIn">
        {data.slice(i, i+4).map((dt, key) => {
          return this.getCard(dt, key + key_prefix);
        })
        }
      </Row>;
      rows.push(row);
    }
    return (
      <Container className="item-cards" style={{paddingTop: "1rem"}}>
        {rows}
      </Container>
    );
  }

  render() {
    return (
      <div className="exploregoogle-page">
        <header className="App-header animate__animated animate__fadeIn">
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

          <Link to="/chat" id="explore-chat-btn" className="btn btn-primary btn-lg active" style={{fontWeight: "bold", color: "white", backgroundColor: "#DB4437", border: "1px solid #DB4437"}}>Chat</Link>
          <Link to="/profile" id="profile-btn" className="btn btn-primary btn-lg active" style={{fontWeight: "bold", color: "white", backgroundColor: "#4285F4", border: "1px solid #4285F4"}}>My Profile</Link>


        </header>
        <div className="explore-content animate__animated animate__fadeIn animate__delay-1s">
          <Tabs defaultActiveKey="groups" id="explore-tab-group">
            <Tab eventKey="groups" title="Groups" className="explore-tabs">
                {this.generateGrid(this.groups, "groups")}
            </Tab>
            <Tab eventKey="events" title="Events" className="explore-tabs">
            {this.generateGrid(this.events, "events")}
            </Tab>
            <Tab eventKey="opportunities" title="Opportunities" className="explore-tabs">
            {this.generateGrid(this.opportunities, "opps")}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ExploreGoogle;
