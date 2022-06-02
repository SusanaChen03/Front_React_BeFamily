import "./Onboarding2.css";
import icon2 from "../../IMG/streamline-icon-startup@250x250 1.png";
import icon3 from "../../IMG/streamline-icon-mvp@250x250 1.png";
import icon4 from "../../IMG/streamline-icon-boombox@250x250 1.png";

const Onboarding2 = () => {
  return (
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
        <img
          src={icon4}
          alt="iconboom"
        />
      </div>
    </div>
  );
};

export default Onboarding2;
