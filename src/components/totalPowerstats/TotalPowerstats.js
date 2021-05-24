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
    <ul className="col-md-6">
      <h3 className="text-white">Powerstats</h3>

      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Intelligence</h6>
        </div>
        <span class="text-muted">{getTeamIntelligenceTotal()}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Strength</h6>
        </div>
        <span class="text-muted">{getTeamStrengthTotal()}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Speed</h6>
        </div>
        <span class="text-muted">{getTeamSpeedTotal()}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Durability</h6>
        </div>
        <span class="text-muted">{getTeamDurabilityTotal()}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Power</h6>
        </div>
        <span class="text-muted">{getTeamPowerTotal()}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Combat</h6>
        </div>
        <span class="text-muted">{getTeamCombatTotal()}</span>
      </li>
    </ul>
  );
}

export default TotalPowerstats;
