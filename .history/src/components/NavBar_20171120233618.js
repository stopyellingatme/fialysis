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
          <nav className="navlinks">
            <Menu stackable className="navigation-menu">
              <Menu.Item>
                <img src="https://react.semantic-ui.com/logo.png" />
              </Menu.Item>

              <Menu.Item
                className="navlink navlink-margin-left"
                as={NavLink}
                exact
                to="/"
                name="Health"
                active={activeItem === "Health"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="navlink"
                as={NavLink}
                to="/fuel-savings"
                name="Details"
                active={activeItem === "Details"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="navlink navlink-margin-right"
                as={NavLink}
                to="/about"
                name="About"
                active={activeItem === "About"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="navlink navlink-company-name"
                as={NavLink}
                name="Company Name"
                active={activeItem === "Company Name"}
                onClick={this.handleItemClick}
                borderless="true"
              />

              <Menu.Menu position="right">
                <Menu.Item
                  className="navlink"
                  name="logout"
                  active={activeItem === "logout"}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
          </nav>
      </div>
    );
  }
}
