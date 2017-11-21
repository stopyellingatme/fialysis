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
            <Menu stackable>
              <Menu.Item>
                <img src="https://react.semantic-ui.com/logo.png" />
              </Menu.Item>

              <Menu.Item
                className="navlink-margin-left"
                as={NavLink}
                exact
                to="/"
                name="Health"
                active={activeItem === "Health"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={NavLink}
                to="/fuel-savings"
                name="Details"
                active={activeItem === "Details"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="navlink-margin-right"
                as={NavLink}
                to="/about"
                name="About"
                active={activeItem === "About"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="navlink-company-name"
                as={NavLink}
                to="/"
                name="$Company Name Company Name Company Name Company Name Company Name"
                active={activeItem === "Company Name"}
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
