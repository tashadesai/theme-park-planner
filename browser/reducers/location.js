import axios from 'axios';
import _ from 'lodash';

//Actions
const GET_LOCATION = 'GET_LOCATION';

//Action Creators
const getLocation = location => ({
  type: GET_LOCATION,
  location
})

//Reducers
export default function dummyReducer (state = {location: []}, action) {
  const newState = _.merge({}, state);
  switch (action.type) {
    case GET_LOCATION:
      newState.location = action.location;
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
