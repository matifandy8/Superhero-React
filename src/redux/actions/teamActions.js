import * as actionTypes from "../constants/teamConstants";
import axios from "axios";

export const addToTeam = (id) => async (dispatch, getState) => {
  const data = await axios.get(
    `https://www.superheroapi.com/api.php/1443253749347702/${id}`
  );

  dispatch({
    type: actionTypes.ADD_TO_TEAM,
    payload: {
      hero: data.data.id,
      name: data.data.name,
      imageUrl: data.data.image.url,
      intelligence: data.data.powerstats.intelligence,
      strength: data.data.powerstats.strength,
      speed: data.data.powerstats.speed,
      durability: data.data.powerstats.durability,
      power: data.data.powerstats.power,
      combat: data.data.powerstats.combat,
      weight: data.data.appearance.weight,
      height: data.data.appearance.height,
    },
  });
  localStorage.setItem("team", JSON.stringify(getState().team.teamItems));
};

export const removeFromTeam = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_TEAM,
    payload: id,
  });

  localStorage.setItem("team", JSON.stringify(getState().team.teamItems));
};
