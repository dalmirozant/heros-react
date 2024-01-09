import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    const publisher = hero.publisher;
    const route = publisher === "DC Comics" ? "/dc" : "/marvel";
    navigate(route);
  };

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="container row mt-2">
      <div className="col-4">
        <img
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter Ego:</strong> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {hero.publisher}
          </li>
          <li className="list-group-item">
            <strong>First Appereance:</strong> {hero.first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          BACK
        </button>
      </div>
    </div>
  );
};
