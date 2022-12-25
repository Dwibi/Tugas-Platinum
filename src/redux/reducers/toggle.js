const initialstate = {
  navbar: true,
  alertDel: false,
};

export const toggle = (state = initialstate, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        navbar: !state.navbar,
      };

    case "TOGGLE_ALERT_DEL":
      return {
        ...state,
        alertDel: !state.alertDel,
      };

    default:
      return state;
  }
};
