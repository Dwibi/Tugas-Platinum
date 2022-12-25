const initialState = {
  login: "",
  TOKEN: "",
};

export const loginData = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_IN":
      return {
        ...state,
        login: action.status,
        TOKEN: action.payload,
      };
    case "LOGIN_DENIED":
      return {
        ...state,
        login: action.payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        login: initialState,
      };

    default:
      return {
        ...state,
      };
  }
};
