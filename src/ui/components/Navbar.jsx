import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", { replace: true });
  };
=======

  const navigate = useNavigate();

  const onLogOut = () => {navigate('/login', {replace: true})}
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>
<<<<<<< HEAD

=======
          
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
<<<<<<< HEAD
=======

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/hero"
          >
            Hero
          </NavLink>
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
<<<<<<< HEAD
          <span className="nav-item nav-link text-primary">dalmirozant</span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
=======
          <span className="nav-item nav-link text-primary" to="/login">
            dalmirozant
          </span>
          <button
          className="nav-item nav-link btn"
          onClick={() => onLogOut()}
          >Logout</button>
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
        </ul>
      </div>
    </nav>
  );
};
