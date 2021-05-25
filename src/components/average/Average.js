import React from "react";
import { useSelector } from "react-redux";

function Average() {
  const team = useSelector((state) => state.team);
  const { teamItems } = team;
  const getAverageHeightTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.height))
      .reduce((a, b) => a + b, 0);
    const average = sum / teamItems.length;
    return average;
  };
  const getAverageWeightTotal = () => {
    const sum = teamItems
      .map((hero) => parseInt(hero.weight))
      .reduce((a, b) => a + b, 0);
    return sum;
  };
  return (
    <ul className="col-md-6">
      <h3 className="text-white">Average</h3>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Height </h6>
        </div>
        <span class="text-muted">{getAverageHeightTotal()}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Weight </h6>
        </div>
        <span class="text-muted">{getAverageWeightTotal()}</span>
      </li>
    </ul>
  );
}

export default Average;
