import { Map } from 'immutable';

const initialState = Map({
  userInfo: {
    a: 'aaa',
    b: 'bbb',
  },
});

// user Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO': {
      return state.set('userInfo', action.payload);
    }
    default:
      return state;
  }
};
