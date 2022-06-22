import "./AddNewMember.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionCreator from "../../store/actionTypes";
import { SHOW_POPUP, URL_HEROKU } from "../../store/typesVar.js";
import { useEffect } from "react";
import usePopup from "../../hooks/usePopup";

const AddNewMember = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popUp = usePopup();

  const { id } = useParams();

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
      if (id === undefined) {
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
          popUp("El nuevo miembro se a creado satisfactoriamente");
          setTimeout(() => navigate("/profile"), 2000);
        } else {
          popUp("No se ha podido crear el miembro" + dataMember.data);
        }
      } else {
        let registerMember = await fetch(URL_HEROKU + "/user/" + id, {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });
        const dataMember = await registerMember.json();

        if (dataMember.success === true) {
          dispatch(actionCreator(SHOW_POPUP, "Se ha creado un nuevo miembro"));
          alert("The member is modify");
          navigate("/profile");
        } else {
          alert("member creation failed:" + dataMember.data);
        }
      }
    } catch (error) {
      dispatch(actionCreator(SHOW_POPUP, "No se ha podido crear el miembro"));
      alert("member creation failed:" + error);
      console.log(error);
    }
  };

  const buttonHandlerDelete = async () => {
    try {
      const results = await fetch(URL_HEROKU + "/user/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      const dataMember = await results.json();
      if (dataMember) {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMember = async (id) => {
    console.log("getmenmber");

    const results = await fetch(URL_HEROKU + "/user/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataMember = await results.json();
    console.log(dataMember);

    if (dataMember.success === true) {
      document.getElementById("name").value = dataMember.data.name;
      document.getElementById("birthday").value = dataMember.data.birthday;
      document.getElementById("email").value = dataMember.data.email;
    } else {
      alert("el miembro no existe");
      navigate("/profile");
    }
  };

  useEffect(() => {
    try {
      console.log(id);
      if (id !== undefined) {
        console.log("1234");
        getMember(id);
        console.log("dkjbdsjgf");

        document.getElementById("title").innerText =
          "Edición datos del miembro";
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="welcome">
        <h1 id="title">Miembro de Familia</h1>
      </div>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="name" className="labelrw">
          ¿Cómo te llamas?
        </label>
        <input className="resRegister" type="text" id="name" name="name" />

        <label htmlFor="birthday" className="labelrw">
          Fecha de nacimiento
        </label>
        <input
          className="resRegister"
          type="date"
          id="birthday"
          name="birthday"
        />

        <label htmlFor="email" className="labelrw">
          Tu dirección de correo preferida
        </label>
        <input className="resRegister" type="email" id="email" name="email" />

        <label htmlFor="password" className="labelrw">
          Contraseña
        </label>
        <input
          className="resRegister"
          type="password"
          id="password"
          name="password"
        />
        <div className="operation">
          <button
            className="sendButton deleteButton btnDelete"
            onClick={buttonHandlerDelete}
          >
            Eliminar
          </button>

          <input
            type="submit"
            value="Guardar"
            className="sendButton resRegister btnSave"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewMember;
