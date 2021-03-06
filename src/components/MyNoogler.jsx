import React, { Component } from "react";
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
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <image src={profileImg} alt="" id="img" className="img"></image>
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
              Choose your photo
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNoogler;
