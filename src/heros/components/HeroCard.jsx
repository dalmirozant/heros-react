import { Link } from "react-router-dom";

const CharacterByAlterEgo = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;
  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card animate__animated animate__fadeIn">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={imgSrc} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharacterByAlterEgo
                alter_ego={alter_ego}
                characters={characters}
              />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>+ INFO</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
