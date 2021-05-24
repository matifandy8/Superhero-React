import "./Hero.css";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { addToTeam } from "../../redux/actions/teamActions";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function Hero({ id, image, name }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);
  const { teamItems } = team;

  useEffect(() => {
    console.log(teamItems.length);
  }, []);
  const addToCartHandler = () => {
    if (teamItems.length === 6) {
      swal("Team completed.", "Max 6 heroes", "error");
    } else {
      dispatch(addToTeam(id));
      history.push(`/`);
    }
  };
  return (
    <div
      className="card text-center bg-dark animate__animated animate__fadeInUp"
      id={id}
    >
      <div className="overflow">
        <img src={image} alt={name} />
      </div>
      <div className="hero__details">
        <p className="details__name">{name}</p>
        <p>{id}</p>

        <button
          className="btn btn-outline-secondary border-1"
          onClick={addToCartHandler}
        >
          Add to Team
        </button>
      </div>
    </div>
  );
}

export default Hero;
