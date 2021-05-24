import * as actionTypes from "../constants/heroConstants";
import axios from "axios";

export const getHeroDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_HERO_DETAILS_REQUEST });

    const data = await axios.get(
      `https://www.superheroapi.com/api.php/1443253749347702/${id}`
    );

    dispatch({
      type: actionTypes.GET_HERO_DETAILS_SUCCESS,
      payload: {
        idem: data.data.id,
        name: data.data.name,
        imageUrl: data.data.image.url,
        fullname: data.data.biography.fullname,
        aliases: data.data.biography.aliases,
        weight: data.data.appearance.weight,
        height: data.data.appearance.height,
        eyecolor: data.data.appearance.eyecolor,
        haircolor: data.data.appearance.haircolor,
        occupation: data.data.work.occupation,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_HERO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeHeroDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_HERO_DETAILS_RESET });
};
