import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        familyName: e.target[0].value,
        name: e.target[1].value,
        birthday: e.target[2].value,
        email: e.target[3].value,
        password: e.target[4].value,
      };
      let registerUser = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await registerUser.json();
      if (data) {
        alert("User Registed");
        navigate("/home");
      }
    } catch (error) {
      alert("Failed register user" + error);
      console.log(error);
    }
  };

  const buttonHandler = () => {
    navigate('/login')
  };

  return (
    <div>
      <div className="welcome">
        <h1>REGÍSTRATE Y EMPIEZA LA AVENTURA</h1>
      </div>
      <form  className="form1" onSubmit={(e) => formSubmit(e)}>
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

        <input type="submit" value="CONTINUAR" className="sendButton" />

        <div className="linkAccount">
          <a className="haveAccount" onClick={buttonHandler}>Ya tengo cuenta</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
