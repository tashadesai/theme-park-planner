import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class ChooseTopAttractions extends Component {
  constructor(props) {
    super(props);
    // this.fetchCurrentLocation = this.fetchCurrentLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchCurrentLocation();
    this.props.fetchAllAttractions();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0]);
    let topTenAttractions = {};

    for (var i = 0; i < event.target.length; i++) {
      let rideName = event.target[i];

      if (rideName.value) {
        topTenAttractions[rideName.value] = rideName.name;
      }
    }

    this.props.setUsersTopAttractions(topTenAttractions);
    this.props.history.push('/map');
  }

  render() {
    return (
      <div>
        <h1>Choose your top ten attractions at Disneyland (Magic Kingdom)!</h1>
        <form onSubmit={this.handleSubmit}>
          {
            this.props.allRides.map((rideName, i) => {
              return (
                <div key={i}>
                  <input type="number" name={rideName} /><ul>{rideName}</ul>
                </div>
              );
            })
          }
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
import { getCurrentLocation } from '../reducers/location';
import { getAllOperatingAttractions, setTopAttractions } from '../reducers/attractions';

const mapStateToProps = state => ({
  allRides: state.attractions.allOperatingAttractions
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentLocation: () => {
    dispatch(getCurrentLocation());
  },
  fetchAllAttractions: () => {
    dispatch(getAllOperatingAttractions());
  },
  setUsersTopAttractions: (topAttractions) => {
    dispatch(setTopAttractions(topAttractions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTopAttractions);
