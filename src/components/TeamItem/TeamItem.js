import { Link } from "react-router-dom";
import "./TeamItem.css";

const TeamItem = ({ item, removeHandler }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <Link
        to={`/heroDetails/${item.hero}`}
        className="teamItem__name"
        style={{ textDecoration: "none" }}
      >
        <div className="overflow">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="card-body text-light">
          <p>Intelligence: {item.intelligence}</p>
          <p>Strength: {item.strength}</p>
          <p>Speed: {item.speed}</p>
          <p>Durability: {item.durability}</p>
          <p>Power: {item.power}</p>
          <p>Combat: {item.combat}</p>
          <p>Weight: {item.weight}</p>
          <p>Height: {item.height}</p>
        </div>
        <p className="card-title">{item.name}</p>
      </Link>
      <button
        className="btn btn-outline-secondary border-1"
        onClick={() => removeHandler(item.hero)}
      >
        Delete
      </button>
    </div>
  );
};

export default TeamItem;
