import React, { Component } from "react";
import {API} from "../global"

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch(`${API}/userData`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div>
        <div><h1>Profile Details</h1></div>
        <h2>Hi {this.state.userData.fname}</h2><br/>
        <h4>Below are your details-</h4>
        <h4>DOB- {this.state.userData.dob}</h4>
        <h4>Age- {this.state.userData.age}</h4>
        <h4>Contact- {this.state.userData.contact}</h4>
        <h4>Email- {this.state.userData.email}</h4>
      </div>
    );
  }
}
