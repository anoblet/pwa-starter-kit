import { SET_DURATION, SET_TIMELEFT, RESET } from '../actions/page-home.js';

const timer = (state = {duration: 300, timeleft: 300}, action) => {
  switch (action.type) {
    case SET_DURATION: {
      return {
        ...state,
        'duration': action.value,
        'timeleft': action.value
      }
    }
    case SET_TIMELEFT: {
      return {
        ...state,
        'timeleft': action.value
      }
    }
    case RESET: {
      return {
        ...state,
        'timeleft': state.duration
      }
    }
    default:
      return state;
  }
};

export default timer;
