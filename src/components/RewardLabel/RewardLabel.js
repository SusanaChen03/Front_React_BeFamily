import "./RewardLabel.css";

const RewardLabel = (allRewards) => {
  const buttonHandlerUser = (name) => {
    const btns = document.querySelectorAll("img[ty]");
    
     
    console.log(name);

    [...btns].forEach((btn) => {
      btn.classList.remove("selectedReward");
      btn.setAttribute("clicked", "false");
      if (btn.getAttribute("value") == name) {
        btn.classList.add("selectedReward");
        btn.setAttribute("clicked", "true");
      }
    });
  };
  return (
    <div>
      <div className="rewardBox">
        <img
          className="rewardImage rewardsel"
          value={allRewards.allRewards.id}
          ty="rewads"
          clicked="false"
          namereward={allRewards.allRewards.name}
          onClick={() => buttonHandlerUser(allRewards.allRewards.id)}
          src={allRewards.allRewards.image}
          alt="rewardImage"
        />
        <p className="rewardName">{allRewards.allRewards.name}</p>
      </div>
    </div>
  );
};

export default RewardLabel;
