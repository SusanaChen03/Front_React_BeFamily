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
    const results = await fetch(URL_LOCAL + "/challenge/familyName/" + sessionStorage.getItem("familyName"), {
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

      <ul className="cardCHs">
        {listChallenges.map((challenges) => {
          return <ChallengeCard challenges={challenges} />;
        })}

        <li>
          <a href="/createChallenge" class="cardCH cardws">
            <img
              src="http://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/casa-voladora-up.jpg"
              class="cardCH__image"
              alt=""
            />
            <div class="cardCH__overlay">
              <div class="cardCH__header cardHeader">
                <span class="iconAdd" onClick={buttonHandler}> <IoAddCircleOutline /></span>
                <h3 class="cardCH__title">AÑADIR NUEVO RETO</h3>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ListChallengers;
