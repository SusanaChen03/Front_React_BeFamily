import "./Register.css";
import Onboarding2 from "../../components/Onboarding2/Onboarding2";

const Register = () => {
  return (
    <div>
      <Onboarding2 />
      <hr />
      <div className="welcome">
        <h1>REGÍSTRATE Y EMPIEZA LA AVENTURA</h1>
      </div>
      <form>
        <label htmlFor="familyName">
          Destaca tu familia! Poneos un nombre chulo
        </label>
        <input type="text" id="familyName" name="familyName" />

        <label htmlFor="name">¿Cómo te llamas?</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="birthday">Fecha de nacimiento</label>
        <input type="date" id="birthday" name="birthday" />

        <label htmlFor="email">Tu dirección de correo preferida</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="CONTINUAR" className="sendButton"/>
        <a>Ya tengo cuenta</a>
      </form>
    </div>
  );
};

export default Register;
