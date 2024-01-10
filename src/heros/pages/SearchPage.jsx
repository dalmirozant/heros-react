import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import queryString from "query-string";
import { getHeroesByQuery } from "../helpers";
import { HeroCard } from "../components";
import { useCallback } from "react";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);

  const heroes = getHeroesByQuery(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length > 0 && searchText.trim().length < 2) return;
    navigate(`?q=${searchText}`);
  };

  const hasQuery = q.length > 0;
  const hasResults = heroes.length > 0;

  const Alert = useCallback(
    () => (
      <div
        className={`alert alert-${
          hasQuery ? "danger" : "primary"
        } animate__animated animate__fadeIn`}
      >
        {hasQuery
          ? `No hay resultados para ${q}`
          : "Busque un héroe por favor!!!!"}
      </div>
    ),
    [q]
  );

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row container">
        <div className="col-5">
          <h5>Searching...</h5>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-1">SEARCH</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          {(!hasResults || !hasQuery) && <Alert />}
          <hr />
          {heroes.map((h) => (
            <HeroCard key={h.id} {...h} />
          ))}
        </div>
      </div>
    </>
  );
};
