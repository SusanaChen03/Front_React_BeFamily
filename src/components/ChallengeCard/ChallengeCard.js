import "./ChallengeCard.css";
import { useNavigate } from "react-router-dom";
const ChallengeCard = (challenge) => {
  const navigate = useNavigate();
  const buttonHandler = async () => {
    try {
     
      navigate("/CreateChallenge/"+challenge.challenges.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (

<div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover cardcontainerCh"  >
        <img src={challenge.challenges.urlReward} alt={challenge.challenges.name}
            class="d-block w-full imgch" />

  <div class="px-2 py-2">
    <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
      Reto
    </p>

    <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 hch1">
    {challenge.challenges.name}
    </h1>

    <p class="mb-1 tl1">
    Recompensa: <br/>
    {challenge.challenges.reward}
    </p>

  </div>

  <a href="#" class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link aref" onClick={buttonHandler}>
   Editar
  </a>

</div>
  

  
  );
};

export default ChallengeCard;
