"use strict";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "Home" };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navbar">
        <div className="navbar-bg">
          <nav className="navlinks">
            <Menu pointing secondary>
              <Menu.Item
                as={NavLink}
                exact
                to="/"
                name="Home"
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={NavLink}
                to="/fuel-savings"
                name="Fuel"
                active={activeItem === "Fuel"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={NavLink}
                to="/about"
                name="About"
                active={activeItem === "About"}
                onClick={this.handleItemClick}
              />

              <Menu.Menu position="right">
                <Menu.Item
                  name="logout"
                  active={activeItem === "logout"}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
          </nav>
        </div>
      </div>
    );
  }
}
