import { UPDATE, UPDATE_DURATION, UPDATE_TIMELEFT } from '../actions/page-home.js';

const timer = (state = {duration: 300, timeleft: 300}, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        'time': action.value,
      };
    case UPDATE_DURATION: {
      return {
        ...state,
        'duration': action.value
      }
    }
    case UPDATE_TIMELEFT: {
      return {
        ...state,
        'timeleft': action.value
      }
    }
    default:
      return state;
  }
};

export default timer;
