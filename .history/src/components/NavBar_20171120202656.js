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
                <img src='/logo.png' />
              </Menu.Item>

              <Menu.Item
                name='features'
                active={activeItem === 'features'}
                onClick={this.handleItemClick}
              >
                Features
              </Menu.Item>

              <Menu.Item
                name='testimonials'
                active={activeItem === 'testimonials'}
                onClick={this.handleItemClick}
              >
                Testimonials
              </Menu.Item>

              <Menu.Item
                name='sign-in'
                active={activeItem === 'sign-in'}
                onClick={this.handleItemClick}
              >
                Sign-in
              </Menu.Item>
            </Menu>
          </nav>
        </div>
      </div>
    );
  }
}
