import { heroes } from "../data/heros";

export const getHeroesByQuery = (name = "") => {
  name = name.toLowerCase().trim();

  if (name.length === 0) return [];
  return heroes.filter((hs) => hs.superhero.toLowerCase().includes(name));
};
