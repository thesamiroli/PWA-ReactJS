import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

export default class Detail extends Component {
  render() {
    let user = this.props.users

    return (
      <div className="details-main">
        <div className="details-head">
          <div className="details-name">
            {user.firstName + " " + user.lastName}
          </div>
          <img src={user.profileImage} />
        </div>
        <div className="details-body">
          <div className="details-adress">
            <div className="details-header">Address</div>
            <div className="details-info">
              <div className="details-field">Country</div>
              <div className="details-value">{user.address.country}</div>
            </div>
            <div className="details-info">
              <div className="details-field">State</div>
              <div className="details-value">{user.address.state}</div>
            </div>
            <div className="details-info">
              <div className="details-field">City</div>
              <div className="details-value">{user.address.city}</div>
            </div>
            <div className="details-info">
              <div className="details-field">Street</div>
              <div className="details-value">{user.address.streetAddress}</div>
            </div>
          </div>
          <div className="details-contact">
            <div className="details-header">Contact</div>
            <div className="details-info">
              <div className="details-field">Email</div>
              <div className="details-value">{user.email}</div>
            </div>
            <div className="details-info">
              <div className="details-field">Phone</div>
              <div className="details-value">{user.phone}</div>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="close">CLOSE</div>
        </Link>
      </div>
    );
  }
}
