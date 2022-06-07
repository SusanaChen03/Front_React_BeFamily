import "./MiniCardChallenger.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const MiniCardChallenger = () => {
  return (
      <div className="minicardMini"> 
    <section class="cardMini-section">
    <div class="cardMini">
                    <div class="flip-cardMini">
                        <div class="flip-cardMini__container">
                            <div class="cardMini-front">
                                <div class="cardMini-front__tp cardMini-front__tp--city">
                                 <h3> <IoAddCircleOutline/></h3>   
                                    

                               <h2 class="cardMini-front__heading">
                                Cinesa
                            </h2>
                            <p class="cardMini-front__text-price">
                                Eternals
                            </p>
                                </div>

                                <div class="cardMini-front__bt">
                                    <p class="cardMini-front__text-view cardMini-front__text-view--city">
                                        Abrir
                                    </p>
                                </div>
                            </div>
                            <div class="cardMini-back">
                           <img
                            src="https://areajugones.sport.es/wp-content/uploads/2022/01/eternals-2.jpg"
                            class="video__container"
                            alt="cinema"
                        />
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--city">
                                Pelicula en Familia
                            </h3>
                            <p class="inside-page__text">
                              Ir a ver la peli de Eternals si hago los deberes
                            </p>
                            <a href="#" class="inside-page__btn inside-page__btn--city">Detalles</a>
                        </div>
                    </div>
                </div>
    </section>
    </div>

  );
};

export default MiniCardChallenger;
 
