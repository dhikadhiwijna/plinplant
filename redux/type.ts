export enum ActionTypes {
  SET_LOGIN = "SET_LOGIN",
  SET_LOGOUT = "SET_LOGOUT",
  SET_REGISTER = "SET_REGISTER",
}

export interface userType {
  first_name: string;
  last_name: string;
  email: string;
  profile_picture?: HTMLImageElement | null;
  birth_date?: string | null;
  phone?: number | null;
  sex?: string | null;
}

interface userLoginAction {
  type: ActionTypes.SET_LOGIN;
  payload: userType;
}

interface userLogoutAction {
  type: ActionTypes.SET_LOGOUT;
  payload: userType;
}

interface userRegisterAction {
  type: ActionTypes.SET_REGISTER;
  payload: userType;
}

export type userAction =
  | userLoginAction
  | userLogoutAction
  | userRegisterAction;
