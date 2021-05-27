import React from "react";
import { useSelector } from "react-redux";

function TotalPowerstats() {
  const team = useSelector((state) => state.team);
  const { teamItems } = team;
  // Switch case other solution

  const getTeamSpeedTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.speed))
      .reduce((a, b) => a + b, 0);
    return sum;
  };
  const getTeamStrengthTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.strength))
      .reduce((a, b) => a + b, 0);
    return sum;
  };
  const getTeamDurabilityTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.durability))
      .reduce((a, b) => a + b, 0);
    return sum;
  };
  const getTeamPowerTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.power))
      .reduce((a, b) => a + b, 0);
    return sum;
  };
  const getTeamCombatTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.combat))
      .reduce((a, b) => a + b, 0);
    return sum;
  };
  const getTeamIntelligenceTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.intelligence))
      .reduce((a, b) => a + b, 0);
    return sum;
  };
  // Switch case other solution
  return (
    <ul className="col-md-3">
      <h3 className="text-white">Powerstats</h3>

      <li className="bg-transparent list-group-item d-flex justify-content-between lh-condensed border-white">
        <div>
          <h6 class="my-0 text-white">Intelligence</h6>
        </div>
        <span className="text-muted">{getTeamIntelligenceTotal()}</span>
      </li>
      <li className="bg-transparent  list-group-item d-flex justify-content-between lh-condensed border-white">
        <div>
          <h6 className="my-0 text-white">Strength</h6>
        </div>
        <span className="text-muted">{getTeamStrengthTotal()}</span>
      </li>
      <li className="bg-transparent  list-group-item d-flex justify-content-between lh-condensed border-white">
        <div>
          <h6 className="my-0 text-white">Speed</h6>
        </div>
        <span className="text-muted">{getTeamSpeedTotal()}</span>
      </li>
      <li className="bg-transparent  list-group-item d-flex justify-content-between lh-condensed border-white">
        <div>
          <h6 className="my-0 text-white">Durability</h6>
        </div>
        <span className="text-muted text-white">
          {getTeamDurabilityTotal()}
        </span>
      </li>
      <li className="bg-transparent  list-group-item d-flex justify-content-between lh-condensed border-white">
        <div>
          <h6 className="my-0 text-white">Power</h6>
        </div>
        <span className="text-muted">{getTeamPowerTotal()}</span>
      </li>
      <li className="bg-transparent  list-group-item d-flex justify-content-between lh-condensed border-white">
        <div>
          <h6 className="my-0 text-white">Combat</h6>
        </div>
        <span className="text-muted">{getTeamCombatTotal()}</span>
      </li>
    </ul>
  );
}

export default TotalPowerstats;
