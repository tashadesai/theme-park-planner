import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  location: require('./location').default,
  attractions: require('./attractions').default
});

export default rootReducer;
