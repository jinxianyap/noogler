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
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <i className="material-icons">add_photo_alternate</i>
              Change picture
            </label>
          </div>
        </div>

        <div className = "formPlacement"
          style = {{ backgroundColor: "red", border: "5px solid yellow" }}
        >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>



      </div>
    );
  }
}

export default MyNoogler;
