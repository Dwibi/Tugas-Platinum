import { postApi, deleteApi, fetchApi, putApi } from "../../config/fetch";

export const getData = (category) => async (dispatch) => {
  dispatch({ type: "LOAD_GET_DATA" });
  try {
    const { data } = await fetchApi("admin/v2/car", {
      ...category,
    });
    dispatch({
      type: "GET_DATA",
      payload: data.cars,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const requestListCarById = (id) => async (dispatch) => {
  dispatch({ type: "LOAD_STATE" });
  try {
    const { data } = await fetchApi(`admin/car/${id}`);
    console.log(data);
    dispatch({
      type: "LIST_DATA_API_BY_ID",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const putData =
  ({ value, id }) =>
  async (dispatch) => {
    dispatch({ type: "LOAD_STATE" });
    try {
      const { status } = await putApi(`admin/car/${id}`, {
        ...value,
      });
      dispatch({
        type: "UPDATE_API",
        payload: status,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const postData =
  ({ value }) =>
  async (dispatch) => {
    try {
      const { status } = await postApi("admin/car", {
        ...value,
      });
      dispatch({
        type: "MOCK_UP_API",
        payload: status,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteData =
  ({ id }) =>
  async (dispatch) => {
    try {
      await deleteApi(`admin/car/${id}`);
      dispatch({
        type: "DELETE_SUCCESS",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
