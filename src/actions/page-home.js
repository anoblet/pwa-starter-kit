export const UPDATE = 'UPDATE';

export const update = (value) => {
  return {
    type: UPDATE,
    value
  };
};

export const UPDATE_DURATION = 'UPDATE_DURATION';

export const updateDuration = (value) => {
  return {
    type: UPDATE_DURATION,
    value
  };
};

export const UPDATE_TIMELEFT = 'UPDATE_TIMELEFT';

export const updateTimeleft = (value) => {
  return {
    type: UPDATE_TIMELEFT,
    value
  };
};