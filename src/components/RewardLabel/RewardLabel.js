import './RewardLabel.css';

const RewardLabel = (allRewards) => {
  return (
      
    <div  >
      <div className="rewardBox">
        <img className="rewardImage" src={allRewards.allRewards.image} alt="rewardImage" />
        <p className="rewardName">{allRewards.allRewards.name}</p>
      </div>
    </div>
  );
};

export default RewardLabel;



