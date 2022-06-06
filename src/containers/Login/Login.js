import Header from "../../components/Header/Header.js"
import "./Login.css";
import {URL_LOCAL} from "../../store/typesVar.js";
import { useNavigate } from "react-router-dom";




const Login = () => {

  const navigate = useNavigate();


  const formSubmit = async (e) => {

    e.preventDefault();
    try {
      const formData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };
      console.log(formData);
      let loginUser = await fetch( URL_LOCAL +"/login", 
        {
          method:"POST",
          
          body: JSON.stringify(formData),
          headers:{
            "Content-Type": "application/json"
          },
        }
      );
      const data = await loginUser.json();
      if (data) {
        alert("User Logged");
        navigate("/home");
      }
    } catch (error) {
      alert("Failed user login" + error);
      console.log(error);
    }
  };

  return (
    <div>

      <div className="loginContainer">
        <h1>BIENVENIDOS!</h1>

        <form onSubmit={(e) => formSubmit(e)}>
          <label htmlFor="email">Tu dirección de correo</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />

          <input type="submit" value="CONTINUAR" className="sendButton"/>

        </form>
      </div>
    </div>
  );
};

export default Login;
