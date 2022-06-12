import "./Login.css";
import {SHOW_POPUP,URL_HEROKU,USER_LOGGED, HIDDEN_POPUP} from "../../store/typesVar.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionCreator from "../../store/actionTypes.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      let loginUser = await fetch(URL_HEROKU + "/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await loginUser.json();

      if (data.success === true) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("id", data.user.id);
        sessionStorage.setItem("rol", data.user.rol);
        sessionStorage.setItem("name", data.user.name);
        sessionStorage.setItem("familyName", data.user.familyName);
        sessionStorage.setItem("logged", true);

        if (sessionStorage.getItem("rol") === "admin") {
          dispatch(
            actionCreator(USER_LOGGED, {
              token: data.token,
              id: data.user.id,
              name: data.user.name,
              role: data.user.role,
            })
          );
          dispatch(
            actionCreator(
              SHOW_POPUP,
              "Se a iniciado correctamente. Bienvenid@ Admin"
            )
          );

          setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);

          navigate("/home");
        } else {
          dispatch(
            actionCreator(USER_LOGGED, {
              token: data.token,
              id: data.user.id,
              name: data.user.name,
              role: data.user.role,
            })
          );
          dispatch(
            actionCreator(
              SHOW_POPUP,
              "Se a iniciado correctamente. Bienvenido" + { name: data.name }
            )
          );

          setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);
          navigate("/home");
        }
      } else {
        alert("Usuario y/o contraseña incorrecto.");
      }
    } catch (error) {
      alert("Failed user login" + error);
    }
  };

  return (
    <div>
      <div className="loginContainer">
        <h1>BIENVENIDOS!</h1>

        <form onSubmit={(e) => formSubmit(e)}>
          <label className="infoLogin" htmlFor="email">Tu dirección de correo</label>
          <input className="resRegister" type="email" id="email" name="email" />

          <label className="infoLogin" htmlFor="password">Contraseña</label>
          <input className="resRegister"type="password" id="password" name="password" />

          <input className="resRegister sendButton" type="submit" value="CONTINUAR"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
