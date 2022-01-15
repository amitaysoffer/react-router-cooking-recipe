import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { title, method, cookingTime, id } = card;
  return (
    <div className="card">
      <h1>{title}</h1>
      <h3>{cookingTime}</h3>
      <p>{method}</p>
      <Link to={`/card/${id}`}>Cook this</Link>
    </div>
  );
};

export default Card;
