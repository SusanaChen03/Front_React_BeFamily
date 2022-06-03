import "./Onboarding.css";

import logo from "../../IMG/LOGO.png";
import icon2 from "../../IMG/streamline-icon-startup@250x250 1.png";
import icon3 from "../../IMG/streamline-icon-mvp@250x250 1.png";
import icon4 from "../../IMG/streamline-icon-boombox@250x250 1.png";

const Onboarding = () => {
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
          !Nadie conoce a los tuyos mejor que tú! <br/>
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
        <div class="center">
          <h3>Conectar mejor con los tuyos y los que te rodean</h3>
        </div>
        <br />
        <div class="middle">
          <img src={icon3} alt="iconMvp" />
          <h3>Haz que tu familia se sientan cercanos a ti</h3>
        </div>
        <div class="buttom">
          <h3>Levantarte por las mañanas lleno de energía y alegría</h3>
          <img src={icon4} alt="iconboom" />
        </div>
        <input className="discover" type="button" value="Descúbrelo" />
      </div>
      
    </div>
  );
};

export default Onboarding;
