<<<<<<< HEAD
import { heroes } from "../data/heros";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher))
    throw new Error(`${publisher} no es correcto. Pelotudo!`);

  return heroes.filter((h) => h.publisher === publisher);
};
=======
import {heroes} from '../data/heros';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['Marvel Comics','DC Comics'];
    if(!validPublishers.includes(publisher)) throw new Error('Publisher incorrecto');

    return heroes.filter(h => h.publisher === publisher)
}
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
