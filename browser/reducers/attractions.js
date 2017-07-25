import axios from 'axios';
import _ from 'lodash';

//Actions
const GET_ALL_OPERATING_ATTRACTIONS = 'GET_ALL_OPERATING_ATTRACTIONS';
const SET_TOP_ATTRACTIONS = 'SET_TOP_ATTRACTIONS';

//Action Creators
const getOperatingAttractions = allOperatingAttractions => ({
  type: GET_ALL_OPERATING_ATTRACTIONS,
  allOperatingAttractions
});

export const setTopAttractions = topAttractions => ({
  type: SET_TOP_ATTRACTIONS,
  topAttractions
})

//Reducers
export default function dummyReducer (state = {allOperatingAttractions: [], topAttractions: {}}, action) {
  const newState = _.merge({}, state);
  switch (action.type) {
    case GET_ALL_OPERATING_ATTRACTIONS:
      newState.allOperatingAttractions = action.allOperatingAttractions;
      break;

    case SET_TOP_ATTRACTIONS:
      newState.topAttractions = action.topAttractions;
      break;

    default:
      return newState;
  }
  return newState;
}

//Dispatchers
export const getAllOperatingAttractions = () => dispatch => {
  axios.get('/api/attractions/all-attractions?status=operating')
    .then(res => {
      dispatch(getOperatingAttractions(res.data));
    });
};

//Using touringplans api
// export const getAllAttractions = () => dispatch => {
//   axios.get('https://touringplans.com/disneyland/attractions.json')
//     .then(res => {
//       dispatch(getAttractions(res.data));
//     })
// }
