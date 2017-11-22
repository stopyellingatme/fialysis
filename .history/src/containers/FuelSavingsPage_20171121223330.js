import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import FuelSavingsForm from '../components/FuelSavingsForm';
import { Segment } from 'semantic-ui-react';

export const FuelSavingsPage = (props) => {
  return (
    <div className="content">
      <Segment className="kit-description-card">
        <FuelSavingsForm
        saveFuelSavings={props.actions.saveFuelSavings}
        calculateFuelSavings={props.actions.calculateFuelSavings}
        fuelSavings={props.fuelSavings}
      />
    </Segment>
  </div>
    
  );
};

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
