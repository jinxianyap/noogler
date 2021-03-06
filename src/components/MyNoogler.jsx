import React, { Component } from "react";
import "./styles.css";
import jordansPic from "../assets/jordansPic.jpeg";
import Image from "react-bootstrap/Image";

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

        <Image
          src={profileImg}
          roundedCircle
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            borderTop: "7px solid #DB4437",
            borderRight: "7px solid #4285F4",
            borderBottom: "7px solid #0F9D58",
            borderLeft: "7px solid #F4B400",
          }}
        />

        <input
          type="file"
          name="image-upload"
          id="input"
          accept="image/*"
          onChange={this.imageHandler}
        ></input>

        <div className="label" style={{marginBottom:'100px'}}>
          <label htmlFor="input" className="image-upload">
            <i className="material-icons">add_photo_alternate</i>
          Choose your photo
          </label>
        </div>

       </div>
      </div>
    );
  }
}

export default MyNoogler;
