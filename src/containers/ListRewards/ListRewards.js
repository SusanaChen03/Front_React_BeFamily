import "./ListRewards.css";
import { useEffect, useState } from "react";
import { URL_LOCAL } from "../../store/typesVar.js";
import RewardCard from "../../components/RewardCard/RewardCard";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListRewards = () => {
  
  const [listReward, setListReward] = useState([]);

  const rewardList = async () => {
    const results = await fetch(URL_LOCAL + "/rewards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataRewards = await results.json();
    setListReward(dataRewards);
  };

  useEffect(() => {
    try {
      rewardList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Lista de recompensas</h1>


      <ul className="cardRWs">
      {listReward.map((reward) => {
            return <RewardCard reward={reward} />;
          })}
    <li>
          <a href="" class="cardRW">
            <img
              src="http://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/casa-voladora-up.jpg"
              class="cardRW__image"
              alt=""
            />
            <div class="cardRW__overlay">
              <div class="cardRW__header cardHeader">
                <Link to="/createReward"><span class="iconAdd"> <IoAddCircleOutline /></span></Link>
                <h3 class="cardRW__title">AÑADIR NUEVA RECOMPENSA</h3>
              </div>
            </div>
          </a>
        </li>

           
      </ul>


   
    </div>
  );
};

export default ListRewards;
