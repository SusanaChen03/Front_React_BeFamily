import Header from "../Header/Header";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="loginContainer">
        <h1>BIENVENIDOS DE NUEVO</h1>

        <form>
          <label htmlFor="email">Tu dirección de correo</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </form>
      </div>
    </div>
  );
};

export default Login;
