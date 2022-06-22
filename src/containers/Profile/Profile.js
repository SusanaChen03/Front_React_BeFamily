import "./Profile.css";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { URL_HEROKU } from "../../store/typesVar";
import { useEffect, useState } from "react";
import DetailProfile from "../../components/DetailProfile/DetailProfile";
import DetailMember from "../../components/DetailMember/DetailMember";

const Profile = () => {
  const navigate = useNavigate();
  const [profileUser, setProfileUser] = useState([]);

  const getUser = async () => {
    const results = await fetch(URL_HEROKU + "/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });
    const dataUser = await results.json();
    setProfileUser(dataUser);
  };
  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [members, setMembers] = useState([]);

  const getmembers = async () => {
    const results = await fetch(
      URL_HEROKU + "/members/" + sessionStorage.getItem("familyName"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }
    );
    const dataMember = await results.json();
    setMembers(dataMember);
  };
  useEffect(() => {
    try {
      getmembers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1 className="familyAdmin">ADMINISTRADOR DE FAMILIA </h1>

      {<DetailProfile user={profileUser} />}

      {/* <div className="updateButton hide">
        <button type="button" class="btn btn-warning update">
          Modificar Datos
        </button>
      </div> */}

      <div className="profileData2">
        <h3 className="titleFamliy">
          <span className="spaname">MIEMBROS DE LA FAMILIA</span>
          <Link to="/addMember">
            <span className="iconAddd">
              <IoPersonAddSharp />
            </span>
          </Link>
        </h3>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha Nac.</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return <DetailMember member={member} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
