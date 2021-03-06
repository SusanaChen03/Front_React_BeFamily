import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionCreator from "../../store/actionTypes.js";
import {
  SHOW_POPUP,
  URL_HEROKU,
  USER_LOGGED,
  HIDDEN_POPUP,
} from "../../store/typesVar.js";
import useLoading from "../../hooks/useLoading";
import usePopup from "../../hooks/usePopup";
import { useEffect, useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popUp = usePopup();
  const loading = useLoading();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        familyName: e.target[0].value,
        name: e.target[1].value,
        birthday: e.target[2].value,
        email: e.target[3].value,
        password: e.target[4].value,
      };
      let registerUser = await fetch(URL_HEROKU + "/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await registerUser.json();

      if (data.success === true) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("id", data.user.id);
        sessionStorage.setItem("rol", data.user.rol);
        sessionStorage.setItem("name", data.user.name);
        sessionStorage.setItem("familyName", data.user.familyName);
        sessionStorage.setItem("logged", true);

        popUp("Se ha registrado correctamente");
        loading();

        if (sessionStorage.getItem("rol") === "admin") {
          dispatch(
            actionCreator(USER_LOGGED, {
              token: data.token,
              id: data.user.id,
              name: data.user.name,
              role: data.user.role,
            })
          );
          popUp("Administrador logeado correctamente");
          setTimeout(() => navigate("/home"), 3500);
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
        dispatch(actionCreator(SHOW_POPUP, "Rellene todos los campos"));
      }
    } catch (error) {
      alert("Failed register user" + error);
      console.log(error);
    }
  };

  const buttonHaveAccount = () => {
    navigate("/login");
  };
  useEffect(() => {
    try {
      console.log("register");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="welcome">
        <h1>REG??STRATE Y EMPIEZA LA AVENTURA</h1>
      </div>
      <form className="form1 " onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="familyName" className="infoRegister">
          Destaca tu familia! Poneos un nombre chulo
        </label>
        <input
          className="resRegister"
          type="text"
          id="familyName"
          name="familyName"
        />

        <label className="infoRegister" htmlFor="name">
          ??C??mo te llamas?
        </label>
        <input className="resRegister" type="text" id="name" name="name" />

        <label className="infoRegister" htmlFor="birthday">
          Fecha de nacimiento
        </label>
        <input
          className="resRegister"
          type="date"
          id="birthday"
          name="birthday"
        />

        <label className="infoRegister" htmlFor="email">
          Tu direcci??n de correo preferida
        </label>
        <input
          className="resRegister"
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@familia.es"
        />

        <label className="infoRegister" htmlFor="password">
          Contrase??a
        </label>
        <input
          className="resRegister"
          type="password"
          id="password"
          name="password"
        />

        <input
          className="resRegister sendButton"
          type="submit"
          value="CONTINUAR"
        />

        <div className="linkAccount">
          <a className="haveAccount" onClick={buttonHaveAccount}>
            Ya tengo cuenta
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
