import React from "react";
import "./HeroDetails.css";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getHeroDetails } from "../../redux/actions/heroActions";
import { useEffect } from "react";

function HeroDetails({ match }) {
  const dispatch = useDispatch();

  const heroDetails = useSelector((state) => state.getHeroDetails);
  const { loading, error, hero } = heroDetails;

  useEffect(() => {
    const path = window.location.pathname.split("/");
    if (hero && path[2] !== hero.idem) {
      dispatch(getHeroDetails(path[2]));
    }
  }, [dispatch, match, hero]);
  return (
    <div className="container align-items-center">
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <h1>Hero Details</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="heroDetails__info">
              <div className="overflow">
                <img src={hero.imageUrl} alt={hero.name} />
              </div>
              <div className="heroDetails__info">
                <p className="heroDetails__name"> {hero.name}</p>
                <p className="heroDetails__name"> {hero.fullname}</p>
                <p className="heroDetails__name"> {hero.aliases}</p>
                <p className="heroDetails__weight"> {hero.weight}</p>
                <p className="heroDetails__weight"> {hero.height}</p>
                <p className="heroDetails__weight"> {hero.eyecolor}</p>
                <p className="heroDetails__weight"> {hero.haircolor}</p>
                <p className="heroDetails__weight"> {hero.occupation}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HeroDetails;
