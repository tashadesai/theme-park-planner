import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class ChooseTopAttractions extends Component {
  constructor(props) {
    super(props);
    // this.fetchCurrentLocation = this.fetchCurrentLocation.bind(this);
  }

  componentWillMount() {
    this.props.fetchCurrentLocation();
  }

  render() {
    return (
      <div>
        <h1>Choose your top ten attractions at Disneyland (Magic Kingdom)!</h1>

      </div>
    );
  }
}
import { getCurrentLocation } from '../reducers/location';
// import { fetchStories } from './reducers/stories';

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchCurrentLocation: () => {
    dispatch(getCurrentLocation());
  }
});

export default connect(mapProps, mapDispatch)(ChooseTopAttractions);
