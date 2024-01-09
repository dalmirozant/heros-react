import { heroes } from "../data/heros";

export const getHeroById = (heroId) => heroes.find((h) => h.id === heroId);
