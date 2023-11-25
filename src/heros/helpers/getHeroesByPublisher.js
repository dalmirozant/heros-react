import {heroes} from '../data/heros';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['Marvel Comics','DC Comics'];
    if(!validPublishers.includes(publisher)) throw new Error('Publisher incorrecto');

    return heroes.filter(h => h.publisher === publisher)
}