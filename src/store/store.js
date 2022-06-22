import { createStore } from "redux";
import { USER_LOGGED, SHOW_POPUP, HIDDEN_POPUP, USER_LOGOUT, SHOW_LOADING, CLOSE_LOADING} from "./typesVar.js";



const initialState = {
    logged:false,
    isAdmin:false,
    popup: { visibility: false, text: "" },
    token: null,
    id: 0,
    name: ""
};


const reducer = (state = initialState, action) => {
    if(action.type === USER_LOGGED){
        return{
            ...state,
            logged:true,
            token: action.payload.token,
            id: action.payload.id,
            name: action.payload.name
        }
    }

    if (action.type === USER_LOGOUT) {
      return {
          ...state,
          logged: false,isAdmin:false
      }
  }

    if (action.type === SHOW_POPUP) {
        return {
          ...state,
          popup: {visibility:true, text: action.payload }
        };
      }

      if (action.type === HIDDEN_POPUP) {
        return {
          ...state,
          popup: { visibility: false }
        };
    }

    if (action.type === SHOW_LOADING) {
      return {
        ...state,
        loading: true,
      };
    }

    if(action.type === CLOSE_LOADING){
      return {
        ...state,
        loading: false,
      }
    }

    return state;
};


export default createStore(reducer)

