function request(actionType) {
  return { type: actionType };
}
function success(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}
function failure(actionType, error) {
  return {
    type: actionType,
    payload: error,
  };
}

const REQUEST = {
  FETCH_DATA_REQUEST: "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE",
};
export { request, success, failure, REQUEST };
