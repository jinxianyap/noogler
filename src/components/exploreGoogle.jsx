import React, {useState} from "react";
import "./exploreGoogle.css";
import { Tabs, Tab, Card, Container, Row, Col, Modal } from 'react-bootstrap';
import dummyImage from "../assets/jordansPic.jpeg";
import Button from 'react-bootstrap/Button'

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
  }
  
  getCard() {
    return (
      <Col>
        <Card onClick={() => this.setShow(true)}>
          <Card.Img variant="top" src={dummyImage} />
          <Card.Body className="card-text">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
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
            Group Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
      
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
              <Container className="item-cards">
                <Row>
                  {this.getCard()}
                  {this.getCard()}
                  {this.getCard()}
                  {this.getCard()}
                </Row>
              </Container>
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
