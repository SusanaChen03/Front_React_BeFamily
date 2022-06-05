import "./Profile.css";
import { IoPersonAddSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <div>
      <h1>ADMINISTRADOR DE FAMILIA </h1>

      <div className="profileData">
        <div className="contentUser">
          <label className="key">NOMBRE:</label>
          <label className="value"> Francisco </label>
        </div>

        <div className="contentUser">
          <label className="key">EMAIL:</label>
          <label className="value"> francisco@gmail.com </label>
        </div>

        <div className="contentUser">
          <label className="key">NOMBRE DE LA FAMILIA:</label>
          <label className="value"> VillaChen </label>
        </div>

        <div className="contentUser">
          <label className="key">CONTRASEÑA:</label>
          <label className="value"> ****** </label>
        </div>
      </div>
      <div className="profileData2">
        <h3 className="titelFamliy">
          <span className="spname">MIEMBROS DE LA FAMILIA</span>{" "}
          <IoPersonAddSharp />
        </h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha Nac.</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jose</td>
              <td>12/09/1991</td>
              <td>jose.villanueva@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
