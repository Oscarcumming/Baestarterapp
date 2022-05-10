import axios from "axios";
import { Button } from "bootstrap";
import { useState } from "react";
import { Container } from "react-dom";
import "./WeatherBody.css";

function FormBackup() {
  //setting function state
  let [userName, setUserName] = useState("mapbox");

  //fetches dynamic data based on the state of the userName
  const fetchData = async () => {
    const data = axios.get(`https://api.github.com/users/${userName}`);

    console.log(data);
    console.log("button pressed");
  };

  handleChange = async (event) => {
    event.preventDefault();

    const data = await axios.get(`https://api.github.com/users/${userName}`);

    console.log(data);

    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  return (
    <div class="container-flex background">
      {/* button to test the query success */}
      <button type="button" class="btn btn-dark" onClick={fetchData}>
        Click
      </button>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {/* <form >
        <input
          type = "text"
          value ={this.state.userName}
          placeholder="enter username">
      </form> */}
    </div>
  );
}

export default FormBackup;
