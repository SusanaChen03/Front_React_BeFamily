import "./CreateChallenge.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserLabel from "../../components/UserLabel/UserLabel";
import { useEffect, useState } from "react";
import { URL_HEROKU } from "../../store/typesVar";
import RewardLabel from "../../components/RewardLabel/RewardLabel";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CreateChallenge = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const [listUser, setListUser] = useState([]);

  const userList = async () => {
    const results = await fetch(URL_HEROKU + "/members/" + sessionStorage.getItem("familyName"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataUsers = await results.json();
    setListUser(dataUsers);
  };
  const getChallenge = async (idChallenge) => {
    const results = await fetch(URL_HEROKU + "/challenge/" + idChallenge, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataChallenge = await results.json();
    if(dataChallenge){
      console.log("name"+dataChallenge.name);
      document.getElementById("challengeName").value=dataChallenge.name;
      document.getElementById("repetition").value=dataChallenge.repeat;
      selectMember(dataChallenge.member_id);
      selectReward(dataChallenge.reward);
    }
     
  };
  const selectMember = async (name) =>{
    const btns = document.querySelectorAll("button[ty]");
    console.log(name);

    [...btns].forEach((btn) => {
      btn.classList.remove("selected");
      btn.setAttribute("clicked", "false");
      if (btn.getAttribute("value") == name) {
        btn.classList.add("selected");
        btn.setAttribute("clicked", "true");
      }
    });
  }
  const selectReward = async (name) =>{
    const btns = document.querySelectorAll("img[ty]");
    console.log(name);

    [...btns].forEach((btn) => {
      btn.classList.remove("selectedReward");
      btn.setAttribute("clicked", "false");
      if (btn.getAttribute("namereward") == name) {
        btn.classList.add("selectedReward");
        btn.setAttribute("clicked", "true");
      }
    });
  }


  
  useEffect(() => {
    try {
      userList();
      rewardList();
      if(id!==undefined){
        getChallenge(id);
        document.getElementById("title").innerText="Edición del Reto";
      }else{
            
      }


    } catch (error) {
      console.log(error);
    }
  }, []);

  const [reward, setReward] = useState([]);

  const rewardList = async () => {
    const resultsReward = await fetch(URL_LOCAL + "/reward/" + sessionStorage.getItem("familyName"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const dataReward = await resultsReward.json();
    setReward(dataReward);
  };

  

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let name=document.getElementById("challengeName").value;
      let repetition=document.getElementById("repetition").value;
      const objMembers = document.querySelectorAll("button[clicked='true']");
      const orewards = document.querySelectorAll("img[clicked='true']");
      if(objMembers.length==0 || orewards .length==0 || name=="" || repetition=="")
      {
        alert("Introduzca todos los campos. Gracias");
        return;
      }
      let ElemMember= objMembers[0];
      let ElemReward= orewards[0];
      
   
      console.log("isActive"+document.getElementById("isActive").value);
      console.log("repetition"+repetition);
      const formData = {
        familyName: sessionStorage.getItem("familyName"),
        name: name,
        
        repeat: repetition,
        reward: ElemReward.getAttribute("value"),
        member_id: ElemMember.getAttribute("value") 
      };

      if(id===undefined){
        formData.isActive=1;
        let postChallenge = await fetch(URL_LOCAL +"/challenge", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });
  
        const challengeData = await postChallenge.json();
        if (challengeData.success === true) {
         
          navigate("/listChallenges");
        } else {
          alert("Challenges update failed:");
        }
        
      }else{
        formData.isActive=document.getElementById("isActive").value;
        let postChallenge = await fetch(URL_LOCAL +"/challenge/"+id, {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });
  
        const challengeData = await postChallenge.json();
        if (challengeData.success === true) {
         
          navigate("/listChallenges");
        } else {
          alert("Challenges update failed:");
        }
      
      }

    } catch (error) {
      alert("challenge creation failed" + error);
      console.log(error);
    }
       
  };
  const buttonHandlerDelete = async () => {
    try {
     
      const results = await fetch(URL_LOCAL + "/challenge/" + id, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      const challengeData = await results.json();
      if(challengeData)
      { navigate("/listChallenges");}
      
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="containerCH">
      <div>
        <h1 className="h1Ch" id='title'>Creación de un nuevo reto</h1>
        <form onSubmit={(e) => formSubmit(e)}>
          <div>
            <label className="labelCh" htmlFor="whoMember"> ¿Quienes van a participar?</label>
            <div>
              {listUser.map((allUsers) => {
                return <UserLabel allUsers={allUsers} />;
              })}
            </div>
            <label htmlFor="challengeName" className="labelCh">Nombre del reto</label>
            <input className="resRegister" type="text" id="challengeName" name="challengeName" />

            <label className="labelCh" htmlFor="repetition">Duración</label>
            <input
             className="resRegister"
              type="number"
              id="repetition"
              name="repetition"
              placeholder="numero de repeticiones"
            ></input>
            <div className="ColorActive">
              
              <div className="input-group divactive">  
                  <label className="chactive   input-group-text" htmlFor="isActive" for="isActive">Activo</label>
                  <select   className="form-select chactive"  id="isActive"   >
                      <option value="1" selected>Activo</option>
                      <option value="0" >Completado</option>
                      
                  </select>
              </div>
            </div>
            <label className="labelCh" htmlFor="reward">Recompensa</label>

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
          <div className="operation">
          <input
            type="submit"
            value="Guardar"
            className="sendButton resRegister btnSave"
          />
          <button   
            className="sendButton resRegister btnDelete" onClick={buttonHandlerDelete} 
          >Eliminar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
