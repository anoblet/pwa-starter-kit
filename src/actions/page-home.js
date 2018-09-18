// Duration
export const SET_DURATION = 'SET_DURATION';
export const setDuration = (value) => {
  return {
    type: SET_DURATION,
    value
  };
};

// Time left
export const SET_TIMELEFT = 'SET_TIMELEFT';
export const setTimeleft = (value) => {
  return {
    type: SET_TIMELEFT,
    value
  };
};

// Reset
export const RESET = 'RESET';
export const reset = () => {
  return {
    type: RESET
  };
};
