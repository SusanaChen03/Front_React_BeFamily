import Header from "../Header/Header";
import "./Login.css";
import {URL_LOCAL} from "../../store/typesVar.js";



const Login = () => {

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
      if(!data){
        console.log('error no have data')
      }
      console.log('Correctp_'+data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
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
