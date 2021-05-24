import * as actionTypes from "../constants/heroConstants";

export const getHeroDetailsReducer = (state = { hero: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_HERO_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_HERO_DETAILS_SUCCESS:
      return {
        loading: false,
        hero: action.payload,
      };
    case actionTypes.GET_HERO_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_HERO_DETAILS_RESET:
      return {
        hero: {},
      };
    default:
      return state;
  }
};
