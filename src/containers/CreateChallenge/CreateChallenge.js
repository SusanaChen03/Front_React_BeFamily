import "./CreateChallenge.css";
import cinema from "../../IMG/iconCinema.png";
import teamPark from "../../IMG/iconTeamPark.png";
import bike from "../../IMG/bike.png";
import aquarium from "../../IMG/aquarium.png";
import {IoAddCircleOutline } from 'react-icons/io5';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const CreateChallenge = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        familyName: sessionStorage.getItem("familyName"),
        name: e.target[0].value,
        repeat: e.target[1].value,
        reward: e.target[2].value,
        memberId: e.target[3].value,
      };

      let postChallenge = await fetch("http://localhost:8000/api/challenge", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const challengeData = await postChallenge.json();

      if (challengeData) {
        alert("The new challenge is generated");
        navigate ('/listChallenges')     
      }
    } catch (error) {
      alert("challenge creation failed" + error);
      console.log(error);
    }
  };

  const buttonHandler = () =>{
    navigate('/listChallenges')
  };

  return (
    <div>
      <div>
        <h1>Creación de un nuevo reto</h1>

        <form onSubmit={(e) => formSubmit(e)}>
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
              type="number"
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

              <div  className="addNewReward">

              <Link to='/createReward'> <span className="addIcon">  <IoAddCircleOutline />{""}</span>  </Link>
              

              <p>Crear recompensa</p>
              
              </div>

            </div>
          </div>
          <input type="submit" value="CREAR RETO" className="sendButton" onClick={buttonHandler}/>
        </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
