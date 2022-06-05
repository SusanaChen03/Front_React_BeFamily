import "./RegisterMember.css";

const RegisterMember = () => {
  return (
    <div className="generla a">
      <div>
        <div className="hello">
          <h1>¡HOLA {} !</h1>
          <h3>Registra a los miembros de tu familia</h3>
        </div>

        <form>
          <div className="separated">
            <div>
              <label htmlFor="alias1"> Alias 1 </label>
              <input type="text" id="alias1" name="alias1" />

              <label htmlFor="alias1"> Alias 2 </label>
              <input type="text" id="alias2" name="alias2" />
            </div>

            <div>
              <label htmlFor="birthday">Fecha de nacimiento</label>
              <input type="date" id="birthday" name="birthday" />

              <label htmlFor="birthday">Fecha de nacimiento</label>
              <input type="date" id="birthday" name="birthday" />
            </div>
          </div>

          <div className="buttons">
            <a href="#">Añadir más miembros</a>
            <input type="submit" value="CONTINUAR" className="sendButton" />
            <input type="button" value="Volver atrás" className="backButton" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterMember;
