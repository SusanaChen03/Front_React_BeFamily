import "./CreateChallenge.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserLabel from "../../components/UserLabel/UserLabel";
import { useEffect, useState } from "react";
import { URL_LOCAL } from "../../store/typesVar";
import RewardLabel from "../../components/RewardLabel/RewardLabel";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CreateChallenge = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [listUser, setListUser] = useState([]);

  const userList = async () => {
    const results = await fetch(URL_LOCAL + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataUsers = await results.json();
    setListUser(dataUsers);
  };

  useEffect(() => {
    try {
      userList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [reward, setReward] = useState([]);

  const rewardList = async () => {
    const resultsReward = await fetch(URL_LOCAL + "/rewards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataReward = await resultsReward.json();
    setReward(dataReward);
  };

  useEffect(() => {
    try {
      rewardList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        familyName: sessionStorage.getItem("familyName"),
        name: e.target[0].value,
        repeat: e.target[1].value,
        reward: e.target[2].value,
        memberId: e.target[3].value,
      };

      let postChallenge = await fetch("http://localhost:8000/api/challenge", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const challengeData = await postChallenge.json();

      if (challengeData) {
        alert("The new challenge is generated");
        navigate("/listChallenges");
      }
    } catch (error) {
      alert("challenge creation failed" + error);
      console.log(error);
    }
  };

  const buttonHandler = () => {
    navigate("/listChallenges");
  };

  return (
    <div>
      <div>
        <h1>Creación de un nuevo reto</h1>
        <form onSubmit={(e) => formSubmit(e)}>
          <div>
            <label htmlFor="whoMember"> ¿Quienes van a participar?</label>
            <div>
              {listUser.map((allUsers) => {
                return <UserLabel allUsers={allUsers} />;
              })}
            </div>
            <label htmlFor="challengeName">Nombre del reto</label>
            <input type="text" id="challengeName" name="challengeName" />

            <label htmlFor="repetition">Duración</label>
            <input
              type="number"
              id="repetition"
              name="repetition"
              placeholder="numero de repeticiones"
            ></input>

            <label htmlFor="reward">Recompensa</label>

            <div className="selectReward">
              {reward.map((allRewards) => {
                return <RewardLabel allRewards={allRewards} />;
              })}
              <div>
                <div className="addNewReward">
                  <Link to="/createReward">
                    <span className="addIcon">
                      <IoAddCircleOutline />
                    </span>
                  </Link>

                  <Link to="/listChallenge"></Link><p className="rewardName">Crear recompensa</p>
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="CREAR RETO"
            className="sendButton"
            onClick={buttonHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
