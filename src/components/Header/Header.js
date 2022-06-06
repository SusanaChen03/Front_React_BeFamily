import "./Header.css";
import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to='/home'>
          <a class="navbar-brand" className="appName"> BeFAMILY </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/listChallenges'>
                <a class="nav-link active" aria-current="page"> Mis retos </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to='listRewards'>
                <a class="nav-link active" aria-current="page"> Recompensas </a>
                </Link>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page"> Retos Conseguidos </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                > Ajustes </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to='/profile'><a class="dropdown-item">Mi Perfil</a></Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Otras opciones</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
