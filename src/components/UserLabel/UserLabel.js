
import "./UserLabel.css";

const UserLabel = (allUsers) => {
  return (
    <div>
        <button type="button" class="btn btn-outline-danger names">
            {allUsers.allUsers.name}</button>
    </div>
  );
};

export default UserLabel;
