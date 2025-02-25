const initialState = {
  count: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: initialState.count,
      };
    default:
      return state;
  }
};

export default counterReducer;
