import "./Onboarding.css";

import logo from "../../IMG/LOGO.png";
import icon1 from "../../IMG/icon1.png";

const Onboarding = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="p1">Colabora en familia</p> <br />
        <p className="p2">Mejora en familia</p> <br />
        <p className="p3">Crece en familia</p>
      </div>

      <div class="right">
        <p class="p4">!Nadie conoce a los tuyos mejor que tú!</p>
        <p class="p4">
          Y confiamos en tu juicio. <br /> Juntos, encontraremos la manera
          <br /> de modificar los hábitos y adaptarlos
          <br /> a vuestro estilo de vida
        </p>

        <img src={icon1} alt="imageHome" />

        <input type="button" value="Descúbrelo" />
      </div>
    </div>
  );
};

export default Onboarding;
