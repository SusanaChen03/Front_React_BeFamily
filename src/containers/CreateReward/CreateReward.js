import "./CreateReward.css";
import { useNavigate } from "react-router-dom";
import { SHOW_POPUP, URL_LOCAL, HIDDEN_POPUP } from "../../store/typesVar.js";
import actionCreator from "../../store/actionTypes";
import { useDispatch } from "react-redux";

const CreateReward = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: e.target[0].value,
        image: e.target[1].value,
        description: e.target[2].value,
      };

      let postReward = await fetch(URL_LOCAL + "/reward", {
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
        alert("The new reward is generated");
        navigate("/listRewards");
      } else {
        alert("reward creation failed:" + rewardData.data);
      }
    } catch (error) {
      dispatch(
        actionCreator(SHOW_POPUP, "No se ha podido crear la recompensa")
      );

      alert("reward creation failed" + error);
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Creación de una recompensa</h1>

        <form onSubmit={(e) => formSubmit(e)}>
          <div>
            <label htmlFor="rewardName">Nombre de la recompensa</label>
            <input type="text" id="rewardName" name="rewardName" />

            <label htmlFor="rewardUrl">URL de la recompensa</label>
            <input
              type="text"
              id="rewardUrl"
              name="rewardUrl"
              placeholder="Buscar una imagen para tu recompensa"
            />

            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" name="description" />
          </div>
          <input
            type="submit"
            value="CREAR RECOMPENSA"
            className="sendButton"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateReward;
