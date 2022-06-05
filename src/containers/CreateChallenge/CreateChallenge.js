import "./CreateChallenge.css";
import cinema from "../../IMG/iconCinema.png";
import teamPark from "../../IMG/iconTeamPark.png";
import bike from "../../IMG/bike.png";
import aquarium from "../../IMG/aquarium.png";

const CreateChallenge = () => {
  return (
    <div>
      <div>
        <h1>Creación de un nuevo reto</h1>

        <form>
          <div>
            <label htmlFor="whoMember"> ¿Quienes van a participar?</label>

            <div>
              <button type="submit" className="names">
                name1
              </button>
              <button type="submit" className="names">
                name2
              </button>
              <button type="submit" className="names">
                name3
              </button>
            </div>

            <label htmlFor="challengeName">Nombre del reto</label>
            <input type="text" id="challengeName" name="challengeName" />

            <label htmlFor="repetition">Duración</label>
            <input
              type="text"
              id="repetition"
              name="repetition"
              placeholder="numero de repeticiones"
            ></input>

            <label htmlFor="reward">Recompensa</label>
            <div className="selectReward">
              <div className="selected">
                <img src={cinema} alt="iconCinema" />
                <p>Entradas de cine</p>
              </div>
              <div className="selected">
                <img src={teamPark} alt="iconCinema" />
                <p>Parque de atracciones</p>
              </div>
              <div className="selected">
                <img src={bike} alt="iconCinema" />
                <p>Una bicicleta</p>
              </div>
              <div className="selected">
                <img src={aquarium} alt="iconCinema" />
                <p>Acuario Atlantis</p>
              </div>
            </div>

            <label htmlFor="writeYou">Escribe uno tú</label>

            <input
              type="text"
              id="reward"
              name="reward"
              placeholder="opcional"
            ></input>
          </div>

          <input type="submit" value="CREAR RETO" className="sendButton" />
        </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
