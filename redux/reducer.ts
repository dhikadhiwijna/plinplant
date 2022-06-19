import { ActionTypes, userAction, userType } from "./type";

const userState: userType = {
  first_name: "",
  last_name: "",
  email: "",
};

export const userReducer = (state = userState, action: userAction) => {
  switch (action.type) {
    case ActionTypes.SET_LOGIN:
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        birth_date: action.payload.birth_date,
        profile_picture: action.payload.profile_picture,
        sex: action.payload.sex,
        phone: action.payload.phone,
      };

    case ActionTypes.SET_LOGOUT:
      localStorage.removeItem("user");
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        birth_date: action.payload.birth_date,
        profile_picture: action.payload.profile_picture,
        sex: action.payload.sex,
        phone: action.payload.phone,
      };

    case ActionTypes.SET_REGISTER:
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
      };
    default:
      return state;
  }
};
