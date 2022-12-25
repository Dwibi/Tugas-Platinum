const initialState = {
  barChart: [],
  chartLoad: false,
  dataTable: [],
  tableLoad: false,
};

export const dashboardData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FETCH_DATA_CHART_BAR":
      return {
        ...state,
        chartLoad: true,
      };

    case "FETCH_DATA_CHART_BAR":
      return {
        ...state,
        barChart: action.payload,
        chartLoad: false,
      };
    case "GET_DATA_TABLE":
      return {
        ...state,
        dataTable: action.payload,
        tableLoad: false,
      };
    case "LOAD_DATA_TABLE":
      return {
        ...state,
        tableLoad: true,
      };
    default:
      return {
        ...state,
      };
  }
};
