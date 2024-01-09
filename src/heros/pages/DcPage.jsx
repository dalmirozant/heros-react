<<<<<<< HEAD
import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
=======
import { HerosList } from "../components"

export const DcPage = () => {
  return (
  <div className="container mt-5">
    <h1>DC Comics</h1>
    <hr/>
      {<HerosList publisher={'DC Comics'}/>}
    </div>
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
  );
};
