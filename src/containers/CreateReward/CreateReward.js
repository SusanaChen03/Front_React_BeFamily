import "./CreateReward.css";
import { useNavigate } from "react-router-dom";
import { SHOW_POPUP, URL_HEROKU, HIDDEN_POPUP } from "../../store/typesVar.js";
import actionCreator from "../../store/actionTypes";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CreateReward = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: e.target[0].value,
        image: e.target[1].value,
        description: e.target[2].value,
        color: document.getElementById("color").value,
        familyName: sessionStorage.getItem("familyName"),
      };
      if (id === undefined) {
        let postReward = await fetch(URL_HEROKU + "/reward", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });

        const rewardData = await postReward.json();

        if (rewardData.success === true) {
          dispatch(
            actionCreator(SHOW_POPUP, "Se ha creado una nueva recompensa")
          );

          navigate("/listRewards");
        } else {
          alert("reward creation failed:" + rewardData.data);
        }
      } else {
        let postReward = await fetch(URL_HEROKU + "/reward/" + id, {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });

        const rewardData = await postReward.json();

        if (rewardData.success === true) {
          dispatch(
            actionCreator(SHOW_POPUP, "Se ha modificado la recompensa")
          );

          navigate("/listRewards");
        } else {
          alert("reward creation failed:" + rewardData.data);
        }
      }
    } catch (error) {
      dispatch(
        actionCreator(SHOW_POPUP, "No se ha podido crear la recompensa")
      );

      alert("reward creation failed" + error);
      console.log(error);
    }
  };

  const buttonHandlerDelete = async () => {
    try {
      const results = await fetch(URL_HEROKU + "/reward/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      const dataRewards = await results.json();
      if (dataRewards) {
        navigate("/listRewards");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getReward = async (idReward) => {
    const results = await fetch(URL_HEROKU + "/reward/id/" + idReward, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataRewards = await results.json();
    if (dataRewards) {
      console.log("name" + dataRewards.name);
      document.getElementById("rewardName").value = dataRewards.name;
      document.getElementById("rewardUrl").value = dataRewards.image;
      document.getElementById("description").value = dataRewards.description;
    }
  };
  useEffect(() => {
    try {
      console.log(id);
      if (id !== undefined) {
        getReward(id);
        document.getElementById("title").innerText = "Edición de la recompensa";
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        <h1 id="title">Creación de una recompensa</h1>

        <form onSubmit={(e) => formSubmit(e)}>
          <div>
            <label className="labelrw" htmlFor="rewardName">
              Nombre de la recompensa
            </label>
            <input
              type="text"
              id="rewardName"
              name="rewardName"
              className="resRegister"
            />

            <label className="labelrw" htmlFor="rewardUrl">
              URL de la recompensa
            </label>
            <input
              type="text"
              id="rewardUrl"
              name="rewardUrl"
              placeholder="Buscar una imagen para tu recompensa"
              className="resRegister"
            />

            <label className="labelrw" htmlFor="description">
              Descripción
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="resRegister"
            />
            <div className="ColorActive">
              <div className="input-group divColor">
                <label
                  className="chcolor  input-group-text"
                  htmlFor="repetition"
                  for="color"
                >
                  Color
                </label>
                <select className="form-select chcolor" id="color" name="color">
                  <option value="#F7327E">Rosa</option>
                  <option value="#4D9BE8" selected>
                    Azul
                  </option>
                  <option value="#4BE682">Verde</option>
                  <option value="#A16FC8">Morado</option>
                </select>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default CreateReward;
