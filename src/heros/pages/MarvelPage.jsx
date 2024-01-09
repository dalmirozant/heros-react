<<<<<<< HEAD
import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
=======
import { HerosList } from "../components";

export const MarvelPage = () => {
  return (
  <div className="container mt-5">
    <h1>Marvel Comics</h1>
    <hr/>
      {<HerosList publisher={'Marvel Comics'}/>}
    </div>
  );
}
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
