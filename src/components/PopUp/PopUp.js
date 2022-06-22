import { useDispatch, useSelector } from "react-redux";
import actionCreator from "../../store/actionTypes";
import { HIDDEN_POPUP } from "../../store/typesVar";

import "./PopUp.css";

const PopUp = () => {
  const dispatch = useDispatch();

  const popupState = useSelector((state) => state.popup);

  const closePopUp = () => {
    dispatch(actionCreator(HIDDEN_POPUP));
  };

  return (
    <div>
      <div className="popup">
        <p>{popupState.text}</p>
      </div>
    </div>
  );
};

export default PopUp;
