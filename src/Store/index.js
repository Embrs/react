import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  userReducer,
});

export default createStore(rootReducer, composeWithDevTools());
