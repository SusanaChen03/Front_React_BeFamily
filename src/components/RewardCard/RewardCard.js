import "./RewardCard.css";


const RewardCard = (reward) => {
  return (


    <li>
      <a href="" class="cardRW">
        <img
          src={reward.reward.image}
          class="cardRW__image"
          alt=""
        />
        <div class="cardRW__overlay">
          <div class="cardRW__header">
            <img
              class="cardRW__thumb"
              src="https://www.creaxid.com.mx/blog/wp-content/uploads/2016/12/Premios.png"
              alt=""
            />
            <div class="cardRW__header-text">
              <h3 class="cardRW__title">{reward.reward.name}</h3>
              <span class="cardRW__status">
                {reward.reward.description}
              </span>
            </div>
          </div>
       
        </div>
      </a>
    </li>
  
  );
};

export default RewardCard;
