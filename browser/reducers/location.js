import axios from 'axios';
import _ from 'lodash';

//Actions
const GET_LOCATION = 'GET_LOCATION';

//Action Creators
const getLocation = currentLocation => ({
  type: GET_LOCATION,
  currentLocation
})

//Reducers
export default function dummyReducer (state = {currentLocation: [-117.918953, 33.812151]}, action) {
  //currentLocation is initially set to the centre of disneyland, CA
  const newState = _.merge({}, state);
  switch (action.type) {
    case GET_LOCATION:
      newState.currentLocation = action.currentLocation;
      break;

    default:
      return newState;
  }
  return newState;
}

//Dispatchers
export const getCurrentLocation = () => dispatch => {
  axios.get('/api/location/current-location')
    .then(res => {
      dispatch(getLocation(res.data));
    });
};
