import "./Onboarding.css";
import logo from "../../IMG/LOGO.png";
import icon2 from "../../IMG/streamline-icon-startup@250x250 1.png";
import icon3 from "../../IMG/streamline-icon-mvp@250x250 1.png";
import icon4 from "../../IMG/streamline-icon-boombox@250x250 1.png";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="container">
        <div className="left">
          <img src={logo} className="appLogo" alt="logo" />
          <p className="p1">Colabora en familia</p> <br />
          <p className="p2">Mejora en familia</p> <br />
          <p className="p3">Crece en familia</p>
        </div>

        <div class="right">
          <p class="p4">
            !Nadie conoce a los tuyos mejor que tú! <br />
            Y confiamos en tu juicio. <br /> Juntos, encontraremos la manera
            <br /> de modificar los hábitos y adaptarlos
            <br /> a vuestro estilo de vida
          </p>
        </div>
      </div>

      <div className="body">
        <div class="top">
          <img src={icon2} alt="iconStartap" />
        </div>
        <h1>LLEGARÁS A CONSEGUIR</h1>
        <br />

        <div className="Part2">
          <img src={icon3} alt="iconMvp" />
          <div class="phases">
            <p className="explain">
              Conectar mejor con los tuyos y los que te rodean
            </p>
            <p className="explain">
              Haz que tu familia se sientan cercanos a ti
            </p>
            <p className="explain">
              Levantarte por las mañanas lleno de energía y alegría
            </p>
          </div>
          <img src={icon4} alt="iconboom" />
        </div>

        <input
          className="discover"
          type="button"
          value="Descúbrelo"
          onClick={buttonHandler}
        />
      </div>
    </div>
  );
};

export default Onboarding;
