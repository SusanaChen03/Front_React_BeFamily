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
      <div className="cardsBody">
        <div>
          {listReward.map((reward) => {
            return <RewardCard reward={reward} />;
          })}
          
        </div>
        <div class="card">
          <img
            src="https://www.creaxid.com.mx/blog/wp-content/uploads/2016/12/Premios.png"
            class="card-img-top"
            alt="Aqualand"
          />

          <div class="card-body">
            <h2 class="card-title">Añade una nueva recompensa</h2>

            <Link to="/createReward">
              <span class="iconAdd">
                {" "}
                <IoAddCircleOutline />{" "}
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRewards;
