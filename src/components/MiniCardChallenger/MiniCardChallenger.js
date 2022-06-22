import "./MiniCardChallenger.css";
import { useNavigate } from "react-router-dom";

const MiniCardChallenger = (card) => {
  const navigate = useNavigate();

  const buttonHandler = async () => {
    try {
      navigate("/CreateChallenge/" + card.card.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="minicardMini">
      <section class="cardMini-section">
        <div class="cardMini">
          <div class="flip-cardMini">
            <div class="flip-cardMini__container">
              <div class="cardMini-front">
                <div class="cardMini-front__tp cardMini-front__tp--city">
                  <h2 class="cardMini-front__heading">{card.card.name}</h2>
                </div>
                <div class="cardMini-front__bt">
                  <p class="cardMini-front__text-view cardMini-front__text-view--city">
                    Abrir
                  </p>
                </div>
              </div>
              <div class="cardMini-back">
                <img
                  src={card.card.urlReward}
                  class="video__container"
                  alt="cinema"
                />
              </div>
            </div>
          </div>

          <div class="inside-page">
            <div class="inside-page__container">
              <h3 class="inside-page__heading inside-page__heading--city">
                Repeticiones: {card.card.repeat}
              </h3>
              <p class="inside-page__text">{card.card.reward}</p>
              <a
                href="#"
                class="inside-page__btn inside-page__btn--city"
                onClick={buttonHandler}
              >
                Modificar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiniCardChallenger;
