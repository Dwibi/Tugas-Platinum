const initialState = {
  data: [],
  formState: {
    name: "",
    category: "",
    price: "",
    status: false,
    image: null,
  },
  loadGet: false,
  loadForm: false,
  dataPost: null,
  deleteApi: false,
  changeApi: null,
};

export const fetchApi = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload,
        loadGet: false,
      };
    case "LOAD_GET_DATA":
      return {
        ...state,
        loadGet: true,
      };

    case "LIST_DATA_API_BY_ID":
      return {
        ...state,
        formState: {
          ...state.formState,
          ...action.payload,
        },
        loadForm: false,
      };

    case "MOCK_UP_API":
      return {
        ...state,
        dataPost: action.payload,
      };

    case "LOAD_STATE":
      return {
        ...state,
        loadForm: true,
      };

    case "RESTART_STATE":
      return {
        ...state,
        formState: initialState.formState,
      };
    case "RESTART_STATE_ADD":
      return {
        ...state,
        dataPost: initialState.dataPost,
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        deleteApi: !state.deleteApi,
      };
    case "UPDATE_API":
      return {
        ...state,
        changeApi: action.payload,
      };
    case "RESET_UPDATE_API":
      return {
        ...state,
        changeApi: initialState.changeApi,
      };

    default:
      return {
        ...state,
      };
  }
};
