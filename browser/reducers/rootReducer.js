import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  location: require('./location').default
});

export default rootReducer;
