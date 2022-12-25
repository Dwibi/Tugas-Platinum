import { fetchApi } from "../../config/fetch";

export const BarChartData =
  ({ from, until }) =>
  async (dispatch) => {
    dispatch({ type: "GET_FETCH_DATA_CHART_BAR" });
    try {
      const { data } = await fetchApi("admin/order/reports", {
        from: from,
        until: until,
      });
      dispatch({
        type: "FETCH_DATA_CHART_BAR",
        payload: data.map((item) => ({
          day: item.day,
          orderCount: Math.floor(Math.random() * (120 - 1) + 1),
        })),
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getDataTable =
  ({ sort, page, pageSize }) =>
  async (dispatch) => {
    dispatch({ type: "LOAD_DATA_TABLE" });
    try {
      const { data } = await fetchApi("admin/v2/order", {
        sort: sort,
        page: page,
        pageSize: pageSize,
      });
      dispatch({
        type: "GET_DATA_TABLE",
        payload: data.orders,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
