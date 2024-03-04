import * as actionTypes from './actionTypes';

const initialState = {
  goals: [],
  filter: 'all'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GOAL:
      return {
        ...state,
        goals: [
          {
            id: Math.random().toString(),
            text: action.text,
            completed: false
          },
          ...state.goals
        ]
      };
    case actionTypes.DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(goal => goal.id !== action.id)
      };
    case actionTypes.TOGGLE_COMPLETION:
      return {
        ...state,
        goals: state.goals.map(goal =>
          goal.id === action.id ? { ...goal, completed: !goal.completed } : goal
        )
      };
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};

export default reducer;
