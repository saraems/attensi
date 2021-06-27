import { combineReducers } from 'redux';
import { assignmentsReducer } from '../Assignments/redux';

const createRootReducer = () =>
  combineReducers({
    assignments: assignmentsReducer,
  });

const rootReducer = createRootReducer();

export default rootReducer;
