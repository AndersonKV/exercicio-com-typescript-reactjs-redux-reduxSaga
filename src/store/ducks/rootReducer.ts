import { combineReducers } from 'redux';

import repositories from './repositories';

//combina todos os reducers
export default combineReducers({
  repositories,
});
