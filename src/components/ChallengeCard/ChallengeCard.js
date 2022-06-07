import "./ChallengeCard.css";

const ChallengeCard = (challenge) => {
  return (
    <div className="challengeCard">
        <div class="card">
          <img
            src="http://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/casa-voladora-up.jpg"
            class="card-img-top"
            alt="challengeImage"
          />

          <div class="cardBody">
            <h3 class="cardTitle">{challenge.challenges.name}</h3>
            <h2 class="card-text">  Repeticiones: {challenge.challenges.repeat} </h2>
            <h2 class="card-rew">Recompensa: {challenge.challenges.reward}</h2>
            </div>
            <div className="cardButtons">
            <a href="#" class="btn btn-outline-primary">
              Ir a Reto
            </a>
            <a href="#" class="btn btn-outline-primary">
              Finalizar
            </a>
            <a href="#" class="btn btn-outline-primary">
              Eliminar
            </a>
            </div>
          
        </div>
    </div>
  );
};

export default ChallengeCard;
