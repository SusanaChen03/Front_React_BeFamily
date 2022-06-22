import "./ListRewards.css";
import { useEffect, useState } from "react";
import { URL_HEROKU } from "../../store/typesVar.js";
import RewardCard from "../../components/RewardCard/RewardCard";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListRewards = () => {
  const [listReward, setListReward] = useState([]);

  const rewardList = async () => {
    const results = await fetch(
      URL_HEROKU + "/reward/" + sessionStorage.getItem("familyName"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }
    );

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
    <div className="containerRw">
      <h1>Lista de recompensas</h1>

      <div class="cardChallegnge">
        {listReward.map((reward) => {
          return <RewardCard reward={reward} />;
        })}

        <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover cardcontainerCh">
          <img
            src="https://www.tecnocarreteras.es/wp-content/uploads/sites/2/2018/12/Premios-y-reconocimientos.jpg"
            class="d-block w-full imgch"
          />

          <div class="px-2 py-2 hp">
            <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
              Recompensa
            </p>

            <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 hch1">
              Crea una nueva recompensa
            </h1>

            <p class="mb-1 tl1">
              <Link to="/createReward" class="linknewrw">
                <span class="iconAdd">
                  {" "}
                  <IoAddCircleOutline />
                </span>
              </Link>
            </p>
          </div>

          <a
            href="/createReward"
            class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link aref"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default ListRewards;
