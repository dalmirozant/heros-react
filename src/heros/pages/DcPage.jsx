import { HerosList } from "../components"

export const DcPage = () => {
  return (
  <div className="container mt-5">
    <h1>DC Comics</h1>
    <hr/>
      {<HerosList publisher={'DC Comics'}/>}
    </div>
  );
};
