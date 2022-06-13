import "./Header.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../../store/store.js";
import { Link } from "react-router-dom";
import { USER_LOGOUT } from "../../store/typesVar.js";
import actionCreator from "../../store/actionTypes";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logged, setLogged] = useState(false);
  const [name, setName] = useState("");
  // const [isAdmin, setisAdmin] = useState(false);
  

  const buttonHandlerSearh = async (e) => {
    try {
      let value = e.target[0].value;
      console.log("value:" + value);

      if (value == null || value == "") {
        navigate("/home");
      } else {
        navigate({ pathname: "/home/" + value });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    store.subscribe(() => {
      setName(store.getState().name[0]);
      setLogged(store.getState().logged);
      // setisAdmin(store.getState().isAdmin); 
    });

    if (sessionStorage.getItem("name") != null) {
      setName(sessionStorage.getItem("name")[0]);
    }
    setLogged(sessionStorage.getItem("logged"));
  }, []);

  const buttonLogout = async () => {
    try {
      sessionStorage.clear();
      dispatch(actionCreator(USER_LOGOUT));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const buttonHome = async () =>{
    try{
      if(logged){
        navigate('/home')
      }else{
        navigate('/')
      }
    }catch (error){ 
      console.log(error)
    }
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
       <a class="navbar-brand" href="#" className="appName" onClick={buttonHome}> BeFamily</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 headerOptions">
            {logged && (<li class="nav-item"> <Link to="/listChallenges"> <a class="nav-link active" aria-current="page">Retos</a></Link></li>
            )}
            {logged && (<li class="nav-item"><Link to="listRewards"><a class="nav-link active" aria-current="page"> Recompensas </a></Link></li>
            )}
             {logged && (<li class="nav-item"><Link to="profile"><a class="nav-link active" aria-current="page"> Mi Perfil </a></Link></li>
            )}
            
          </ul>
          <div className="headerButtons">
          {logged && (
            <form class="d-flex" onSubmit={(e) => buttonHandlerSearh(e)}>
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success searchButton" type="submit" >  Search  </button>
            </form>
          )}
          {!logged && (
            <Link to="/register"><button class="btn btn-primary register" type="button">Registrate</button> </Link>
          )}
          {!logged && (<Link to="/login"><button class="btn btn-primary register" type="button">Login</button></Link>
          )}
          {logged && (
            <button onClick={buttonLogout} className="btn btn-primary register" type="button" >Logout</button>
          )}
          {logged && <div className="circle">{name}</div>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
