import "./Home.css";
import {Link} from 'react-router-dom';

import React, { Component } from "react";

export default class Home extends Component {

  render() {
    let users = this.props.users;
    return (
      <div className="list-main">
        <div className="list-header">PEOPLE</div>
        <div className="list">
        <ul>
          {users.map((value, index) => {
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
