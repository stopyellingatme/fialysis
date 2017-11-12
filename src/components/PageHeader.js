'use strict';
import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';


export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-row">
        <header>
          <div className="header-item header-left pull-left">
            <Header as="h2">
              <Icon floated="right" name="users" />
              <Header.Content>
                  Profile
                <Header.Subheader>
                  Manage your profile
                </Header.Subheader>
              </Header.Content>
            </Header>
          </div>
          <div className="header-center header-item">
            <h3>
              CENTER ITEM
            </h3>
          </div>
          <div className="header-right header-item pull-right">
            <Header as="h2">
              <Icon name="settings" />
              <Header.Content>
                  Account Settings
                <Header.Subheader>
                  Manage your preferences
                </Header.Subheader>
              </Header.Content>
            </Header>
          </div>
        </header>
      </div>
    );
  }
}
