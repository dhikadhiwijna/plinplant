import { createWrapper } from "next-redux-wrapper";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { userReducer } from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const Store = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export type RootState = ReturnType<typeof rootReducer>;
export const wrapper = createWrapper(Store);
