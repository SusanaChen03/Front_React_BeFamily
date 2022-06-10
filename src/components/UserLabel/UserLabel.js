import "./UserLabel.css";

const UserLabel = (allUsers) => {
  const buttonHandlerUser = (name) => {
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
  };
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-danger names"
        ty="member" 
        value={allUsers.allUsers.id}
        clicked="false"
        onClick={() => buttonHandlerUser(allUsers.allUsers.id)}
      >
        {allUsers.allUsers.name}
      </button>
    </div>
  );
};

export default UserLabel;
