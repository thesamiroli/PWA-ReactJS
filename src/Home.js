import "./Home.css";
import {Link} from 'react-router-dom';

import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://mock-io.herokuapp.com/users")
      .then(data => data.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="main">
        <div className="header">PEOPLE</div>
        <div className="list">
        <ul>
          {this.state.users.map((value, index) => {
            return (
              <li key={index}>
                <Link to={'/' + value.id}>
                <div className="list-holder">
                  <img src={value.profileImage} />
                  <p>{value.firstName + " " + value.lastName}</p>
                </div>
                </Link>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    );
  }
}
