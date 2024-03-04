import * as actionTypes from './actionTypes';

export const addGoal = text => ({
  type: actionTypes.ADD_GOAL,
  text
});

export const deleteGoal = id => ({
  type: actionTypes.DELETE_GOAL,
  id
});

export const toggleCompletion = id => ({
  type: actionTypes.TOGGLE_COMPLETION,
  id
});

export const setFilter = filter => ({
  type: actionTypes.SET_FILTER,
  filter
});
