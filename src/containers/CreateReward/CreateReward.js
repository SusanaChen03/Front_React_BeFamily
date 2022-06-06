import "./CreateReward.css";

const CreateReward = () => {


  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: e.target[0].value,
        image: e.target[1].value,
        description: e.target[2].value,
        challenge_id: e.target[3].value,
      };

      let postReward = await fetch("http://localhost:8000/api/reward", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const rewardData = await postReward.json();

      if (rewardData) {
        alert("The new reward is generated");      }
    } catch (error) {
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
