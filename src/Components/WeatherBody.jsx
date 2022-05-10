import axios from "axios";
import { Button } from "bootstrap";
import { Fragment } from "react";
import { useState } from "react";
import { Container } from "react-dom";
import "./WeatherBody.css";
import { Component } from "react";
import React from "react";
import { ComponentClass } from "react";
import UserCard from "./UserCard";

class WeatherBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameInput: null,
      userName: null,
      bio: null,
      avatar_url: null,
      location: null,
      company: null,
      showBox: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    console.log("Value submitted is " + this.state.userNameInput);

    const dataResp = await axios.get(
      `https://api.github.com/users/${this.state.userNameInput}`
    );

    console.log();

    this.setState({ avatar_url: dataResp.data.avatar_url });
    this.setState({ userName: dataResp.data.login });
    this.setState({ bio: dataResp.data.bio });
    this.setState({ company: dataResp.data.company });
    this.setState({ location: dataResp.data.location });
    this.setState({ showBox: true });

    // this.state.avatar_url = data.avatar_url;
    console.log(dataResp.data.avatar_url);

    console.log(this.state.showBox);

    console.log(dataResp);
  };

  handleChange = async (event) => {
    event.preventDefault();

    this.setState({ userNameInput: event.target.value });

    console.log("value is " + event.target.value);
    console.log("usernameInput value is " + this.state.userNameInput);
  };

  render() {
    return (
      <div className=" p-5 ">
        <div className="form-group padding_01">
          <form onSubmit={this.handleSubmit}>
            {/* <label className="text_01">GitHub Email</label> */}
            <input
              // type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Github UserNameInput"
              onChange={this.handleChange}
              value={this.state.userNameInput}
            ></input>
          </form>
          {/* <small id="emailHelp" className="form-text text-muted">
            Enter username
          </small> */}
        </div>
        <div className="center">
          {this.state.showBox ? (
            <UserCard
              userName={this.state.userName}
              avatar_url={this.state.avatar_url}
              bio={this.state.bio}
              company={this.state.company}
              location={this.state.location}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default WeatherBody;
