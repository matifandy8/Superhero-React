import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// Actions
import { removeFromTeam } from "../../redux/actions/teamActions";
import TeamItem from "../../components/TeamItem/TeamItem";
import TotalPowerstats from "../../components/totalPowerstats/TotalPowerstats";
import Average from "../../components/average/Average";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);
  const { teamItems } = team;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push({
        pathname: "/",
      });
    } else {
      history.push({
        pathname: "/login",
      });
    }
  }, []);
  const removeFromTeamHandler = (id) => {
    dispatch(removeFromTeam(id));
  };

  return (
    <div className="home">
      <h1 className="jumbotron text-center p-3 p-md-3">My Team</h1>
      <div className="row justify-content-center">
        <TotalPowerstats />

        <Average />
      </div>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {teamItems.length === 0 ? (
            <div className="jumbotron text-center text-white p-3 p-md-3">
              <h4>Your Team Is Empty</h4> <Link to="/search">Go to Search</Link>
            </div>
          ) : (
            teamItems.map((item) => (
              <div className="col-md-6" key={item.hero}>
                <TeamItem
                  key={item.hero}
                  item={item}
                  removeHandler={removeFromTeamHandler}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
