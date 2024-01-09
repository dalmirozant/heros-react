import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <ul className="row row-cols-1 row-cols-md-3 g-3">
        {heros.map((h) => (
          <HeroCard key={h.id} {...h} />
        ))}
      </ul>
    </>
  );
};
