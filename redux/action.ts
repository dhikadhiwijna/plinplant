import { ActionTypes, userType } from "./type";

export const setLogin = ({
  first_name,
  last_name,
  email,
  birth_date,
  phone,
  profile_picture,
  sex,
}: userType) => ({
  type: ActionTypes.SET_LOGIN,
  payload: {
    first_name: first_name,
    last_name: last_name,
    email: email,
    birth_date: birth_date,
    phone: phone,
    profile_picture: profile_picture,
    sex: sex,
  },
});

export const setLogout = () => ({
  type: ActionTypes.SET_LOGOUT,
  payload: {
    first_name: "",
    last_name: "",
    email: "",
    birth_date: null,
    phone: null,
    profile_picture: null,
    sex: null,
  },
});
