import { combineReducers } from "redux";
import { toggle } from "../reducers/toggle";
import { fetchApi } from "./cars_reducer";
import { dashboardData } from "./dashboard_reducer";
import { loginData } from "./login_reducer";

export default combineReducers({
  toggle,
  fetchApi,
  dashboardData,
  loginData,
});
