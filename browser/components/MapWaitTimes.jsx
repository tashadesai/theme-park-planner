import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import secrets from '../../tokens.json';

const mapboxKey = secrets.mapbox;
const Mapbox = ReactMapboxGl({
  accessToken: mapboxKey
});

class MapWaitTimes extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCurrentLocation();
  }



  render() {
    return (
      <div>
        <h1>Map!</h1>
        <Mapbox
          style={`mapbox://styles/mapbox/outdoors-v9`}
          center={this.props.currentLocation}
          interactive="true" // if false, map cannot be manipulated
          zoom={[16]}
          containerStyle={{
          position: 'relative',
          height: '50vh',
          width: 'auto',
          display: 'flex'}}
        >
          <div>
            <Layer
              type="symbol"
              id="marker"
              layout={{
              'icon-image': 'marker-15'
            }}>
            </Layer>
            <Marker coordinates={this.props.currentLocation} anchor="bottom">
              <img src='http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Pink-icon.png' height='35vh'/>
            </Marker>
            {/* {
              this.props.topRides.map(ride => {
                return (<Marker coordinates=)
              })
            } */}
          </div>
        </Mapbox>
      </div>
    );
  }
}
import { getCurrentLocation } from '../reducers/location';
import { getAllOperatingAttractions } from '../reducers/attractions';

const mapStateToProps = state => ({
  topRides: state.attractions.topAttractions,
  currentLocation: state.location.currentLocation
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentLocation: () => {
    dispatch(getCurrentLocation());
  },
  fetchAllAttractions: () => {
    dispatch(getAllOperatingAttractions());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapWaitTimes);
