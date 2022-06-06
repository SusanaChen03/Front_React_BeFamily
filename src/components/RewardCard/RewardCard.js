import "./RewardCard.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const RewardCard = () => {
  return (
    <div className="rewardCard">
      <div className="profileStyles">
        <div class="card">
          <img
            src="https://areajugones.sport.es/wp-content/uploads/2022/01/eternals-2.jpg"
            class="card-img-top"
            alt="cinema"
          />

          <div class="card-body">
            <h5 class="card-title">Entradas de cine</h5>
            <p class="card-text">Cine para la película ETERNALS</p>
          </div>
        </div>
      </div>

      <div class="card">
        <img
          src="https://anpeandalucia.es/imageFile.php?link=portfolio/1/aqualand_t1559905111a.jpg"
          class="card-img-top"
          alt="Aqualand"
        />

        <div class="card-body">
          <h5 class="card-title">Añade una nueva recompensa</h5>

          <h1 class="iconAdd">
            <Link to="/createReward">
              <IoAddCircleOutline />
              {""}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
