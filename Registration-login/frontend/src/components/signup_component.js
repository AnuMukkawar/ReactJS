import React, { Component } from "react";
import {API} from "../global";

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      dob: "",
      age: 0,
      contact: 0,
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, dob, age, contact, email, password } = this.state;
    // console.log(fname, lname, email, password);
     fetch(`${API}/register`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        dob,
        age,
        contact,
        email,
        password
      }),
    })
      .then((res) => {res.json();
      window.location.href = '/login-user';})
      .then((data) => {
        console.log(data, "userRegister");
       
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>DOB</label>
          <input
            type="Date"
            className="form-control"
            placeholder="DOB"
            onChange={(e) => this.setState({ dob: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Age</label>
          <input
            type="Number"
            className="form-control"
            placeholder="Age"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contact</label>
          <input
            type="Number"
            className="form-control"
            placeholder="Contact"
            onChange={(e) => this.setState({ contact: e.target.value })}
          />
        </div>


        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login-user">sign in?</a>
        </p>
      </form>
    );
  }
}
