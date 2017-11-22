'use strict';
import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SideNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="sidebar-div pull-left">
        <div className="sidenav">
          <Menu vertical className="sidenav">
            <Menu.Item className="logo-area">
              <Icon className="logo" loading name="code" />
            </Menu.Item>
            <Menu.Item>
              <Input placeholder="Search..." />
            </Menu.Item>

            <Menu.Item>
              Home

              <Menu.Menu>
                <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                  Search
                </Menu.Item>
                <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                  Add
                </Menu.Item>
                <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                  Remove
                </Menu.Item>
                <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                  Search
                </Menu.Item>
                <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                  Add
                </Menu.Item>
                <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                  Remove
                </Menu.Item>
                <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                  Search
                </Menu.Item>
                <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                  Add
                </Menu.Item>
                <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                  Remove
                </Menu.Item>
                <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                  Search
                </Menu.Item>
                <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                  Add
                </Menu.Item>
                <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                  Remove
                </Menu.Item>
                <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                  Search
                </Menu.Item>
                <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                  Add
                </Menu.Item>
                <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                  Remove
                </Menu.Item>
                <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                  Search
                </Menu.Item>
                <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                  Add
                </Menu.Item>
                <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                  Remove
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item name="browse" active={activeItem === 'browse'} onClick={this.handleItemClick}>
              <Icon name="grid layout" />
              Browse
            </Menu.Item>
            <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick}>
              Messages
            </Menu.Item>

            <Dropdown item text="More">
              <Dropdown.Menu>
                <Dropdown.Item icon="edit" text="Edit Profile" />
                <Dropdown.Item icon="globe" text="Choose Language" />
                <Dropdown.Item icon="settings" text="Account Settings" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
      </div>
    )
  }
}

export default connect()(SideNav);
