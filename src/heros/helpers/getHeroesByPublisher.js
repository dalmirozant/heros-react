import { heroes } from "../data/heros";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher))
    throw new Error(`${publisher} no es correcto. Pelotudo!`);

  return heroes.filter((h) => h.publisher === publisher);
};
