import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./MyNoogler.css";

export class MyNoogler extends Component {
  state = {
    profileImg:
      "https://img.talkandroid.com/uploads/2016/06/google_app_icon.png",
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;

    return (
      <div className="page">
        <div className="container">
          <div className="img-holder">
            <Image className = "img" src = {profileImg}  roundedCircle />
          </div>
          <input
            type="file"
            name="image-upload"
            id="input"
            accept="image/*"
            onChange={this.imageHandler}
          ></input>
          <div className="label"
          style = {{ fontSize: 12 }}

          >

            <label htmlFor="input" className="image-upload">
              <i className="material-icons">add_photo_alternate</i>
              Change picture
            </label>
          </div>
        </div>

        <div className = "formPlacement"
          style = {{ backgroundColor: "white", paddingLeft: "30px", paddingRight: "30px", paddingTop: "30px", paddingBottom: "30px" }}
        >
          <Form style = {{ fontSize: 12 }}>
            <Form.Group controlId="formBasicEmail" >
              <Form.Label >Full name</Form.Label>
              <Form.Control type="text" placeholder="Jordan Edoimioya" readonly/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Current Location</Form.Label>
              <Form.Control type="text" placeholder="Wii U, UK" readonly />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="number" placeholder="1890" readonly />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email </Form.Label>
              <Form.Control type="text" placeholder="Email" readonly />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Gender </Form.Label>
              <Form.Control type="text" placeholder="gender" readonly />
            </Form.Group>

            <Button variant="primary" type="submit" style = {{ fontSize: 12 }}>
              Edit your information
            </Button>
          </Form>
        </div>



      </div>
    );
  }
}

export default MyNoogler;
