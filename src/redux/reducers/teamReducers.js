import * as actionTypes from "../constants/teamConstants";

export const teamReducer = (state = { teamItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_TEAM:
      const item = action.payload;

      const existItem = state.teamItems.find((x) => x.hero === item.hero);

      if (existItem) {
        return {
          ...state,
          teamItems: state.teamItems.map((x) =>
            x.hero === existItem.hero ? item : x
          ),
        };
      } else {
        return {
          ...state,
          teamItems: [...state.teamItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_TEAM:
      return {
        ...state,
        teamItems: state.teamItems.filter((x) => x.hero !== action.payload),
      };
    default:
      return state;
  }
};
