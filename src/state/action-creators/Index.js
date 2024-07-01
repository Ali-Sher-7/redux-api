// import axios from "axios";

// export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
// export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
// export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// const fetchDataRequest = () => ({
//   type: FETCH_DATA_REQUEST,
// });

// const fetchDataSuccess = (data) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// const fetchDataFailure = (error) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error,
// });

// export const fetchData = () => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest());
//     try {
//       const response = await axios.get(
//         "http://universities.hipolabs.com/search?country=United+States"
//       );
//       dispatch(fetchDataSuccess(response.data));
//     } catch (err) {
//       dispatch(fetchDataFailure(err.message));
//     }
//   };
// };
import { unitedKingdomUniversities } from "../api/uKUni";
import { request, success, failure, REQUEST } from "./Utilities";
export const fetchData = () => {
  return (dispatch) => {
    dispatch(request(REQUEST.FETCH_DATA_REQUEST));
    unitedKingdomUniversities().then(
      (response) => {
        dispatch(success(REQUEST.FETCH_DATA_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure(REQUEST.FETCH_DATA_FAILURE, error.message));
      }
    );
  };
};
