import "./ListChallengers.css";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL_LOCAL } from "../../store/typesVar";

const ListChallengers = () => {
  const navigate = useNavigate();

  const [listChallenges, setListChallenges] = useState([]);

  const challengeList = async () => {
    const results = await fetch(URL_LOCAL + "/challenges", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataChallenges = await results.json();
    setListChallenges(dataChallenges);
  };

  useEffect(() => {
    try {
        challengeList();
    } catch (error) {
      console.log(error);
    }
  }, []);


  const buttonHandler = () => {
    navigate("/createChallenge");
  };

  return (
    <div>
      <h1>Retos de la Familia </h1>

      <div> 
          {listChallenges.map((challenges)=>{
              return <ChallengeCard challenges={challenges}/>
          })};
      </div>

      <div class="card">
        <img
          src="http://ejerciciosencasa.es/wp-content/uploads/2015/12/reto.jpg"
          class="card-img-top"
          alt="challengeImage"
        />

        <div class="card-body">
          <h5 class="card-title">Añade un nuevo Reto</h5>
          <h1 class="iconAdd" onClick={buttonHandler}>
            <IoAddCircleOutline />{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ListChallengers;
