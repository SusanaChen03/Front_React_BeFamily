import "./ChallengeCard.css";

const Challengecard = (challenge) => {
  return (
    <li>
      <a href="" class="cardCH cardws">
        <img
          src="http://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/casa-voladora-up.jpg"
          class="cardCH__image"
          alt=""
        />
        <div class="cardCH__overlay">
          <div class="cardCH__header">
            <img
              class="cardCH__thumb"
              src="http://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/casa-voladora-up.jpg"
              alt=""
            />
            <div class="cardCH__header-text">
              <h3 class="cardCH__title">{challenge.challenges.name}</h3>
              <span class="cardCH__status">
                Repeticiones: {challenge.challenges.repeat}
              </span>
            </div>
          </div>
          <p class="cardCH__description">
            Recompensa: {challenge.challenges.reward}
          </p>
        </div>
      </a>
    </li>
  );
};

export default Challengecard;
