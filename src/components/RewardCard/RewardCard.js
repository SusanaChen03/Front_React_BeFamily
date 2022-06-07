import "./RewardCard.css";


const RewardCard = (reward) => {
  return (
    <div className="rewardCard">
      <div className="profileStyles">
        <div class="card">
          <img
            src={reward.reward.image}
            class="card-img-top"
            alt="cinema"
          />

          <div class="card-body">
            <h2 class="card-title">{reward.reward.name}</h2>
            <h2 class="card-text">{reward.reward.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
