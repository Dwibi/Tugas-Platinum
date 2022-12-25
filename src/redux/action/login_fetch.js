import { loginPostApi } from "../../config/fetch";

export const loginPost =
  ({ value }) =>
  async (dispatch) => {
    try {
      const { status, data } = await loginPostApi("admin/auth/login", {
        ...value,
      });
      localStorage.setItem("access_token", data.access_token);
      dispatch({
        type: "LOGIN_IN",
        payload: data.access_token,
        status,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_DENIED",
        payload: "SALAH",
      });
    }
  };
