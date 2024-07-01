// import {
//   FETCH_DATA_REQUEST,
//   FETCH_DATA_SUCCESS,
//   FETCH_DATA_FAILURE,
// } from "../action-creators/Index";
// const init = {
//   loading: false,
//   data: [],
//   error: null,
// };
// const ApiCall = (state = init, action) => {
//   if (action.type === FETCH_DATA_REQUEST) {
//     return { ...state, loading: true, error: null };
//   }
//   if (action.type === FETCH_DATA_SUCCESS) {
//     return { ...state, loading: false, data: action.payload };
//   }
//   if (action.type === FETCH_DATA_FAILURE) {
//     return { ...state, loading: false, error: action.payload };
//   } else {
//     return state;
//   }
// };
// export default ApiCall;

import { REQUEST } from "../action-creators/Utilities";
const init = {
  getDataLoading: false,
  getDataSuccess: false,
  getDataFailure: false,
  getDataError: null,
  getData: [],
};

const ApiCall = (state = init, action) => {
  switch (action.type) {
    case REQUEST.FETCH_DATA_REQUEST:
      return {
        ...state,
        getDataLoading: true,
        getDataSuccess: false,
        getDataFailure: false,
        getDataError: null,
      };
    case REQUEST.FETCH_DATA_SUCCESS:
      return {
        ...state,
        getDataLoading: false,
        getDataSuccess: true,
        getDataFailure: false,
        getDataError: null,
        getData: action.payload,
      };
    case REQUEST.FETCH_DATA_FAILURE:
      return {
        ...state,
        getDataLoading: false,
        getDataSuccess: false,
        getDataFailure: true,
        getDataError: action.payload,
      };
    default:
      return state;
  }
};

export default ApiCall;
