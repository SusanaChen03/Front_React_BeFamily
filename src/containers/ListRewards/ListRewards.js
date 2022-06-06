import "./ListRewards.css";
import { useEffect, useState } from "react";
import { SHOW_POPUP, URL_LOCAL, HIDDEN_POPUP } from "../../store/typesVar.js";
import RewardCard from "../../components/RewardCard/RewardCard";

const ListRewards = () => {
  const [listReward, setListReward] = useState([]);

  const rewardList = async () => {
    const results = await fetch(URL_LOCAL + "/rewards", {
      method: "GET",
    });

    const dataRewards = await results.json();
    setListReward(dataRewards);
  };

  
  useEffect(() => {
    try {
      rewardList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Lista de recompensas</h1>
      {listReward.map(()=>{
        return <RewardCard/>
      })};
    </div>
  );
};

export default ListRewards;
