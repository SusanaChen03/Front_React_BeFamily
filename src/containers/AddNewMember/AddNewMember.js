import "./AddNewMember.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionCreator from "../../store/actionTypes";
import { SHOW_POPUP, HIDDEN_POPUP, URL_HEROKU } from "../../store/typesVar.js";

const AddNewMember = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pop = useSelector((state) => state.SHOW_POPUP);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        familyName: sessionStorage.getItem("familyName"),
        name: e.target[0].value,
        birthday: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
      };

      let registerMember = await fetch(URL_HEROKU + "/member", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      const dataMember = await registerMember.json();
      if (dataMember.success === true) {
        dispatch(actionCreator(SHOW_POPUP, "Se ha creado un nuevo miembro"));
        alert("The new member is added");
        navigate("/profile");
      } else {
        alert("member creation failed:" + dataMember.data);
      }
    } catch (error) {
      dispatch(actionCreator(SHOW_POPUP, "No se ha podido crear el miembro"));
      alert("member creation failed:" + error);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="welcome">
        <h1>Miembro de Familia</h1>
      </div>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="name">¿Cómo te llamas?</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="birthday">Fecha de nacimiento</label>
        <input type="date" id="birthday" name="birthday" />

        <label htmlFor="email">Tu dirección de correo preferida</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />

        <input
          type="submit"
          value="CREAR NUEVO MIEMBRO"
          className="sendButton"
        />
      </form>
    </div>
  );
};

export default AddNewMember;
