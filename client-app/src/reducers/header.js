export default (state = {}, action) => {
  switch (action.type) {
    case "HEADER_LOADED":
      return {
        ...state,
        currentUser:
          action.error || !action.payload ? null : action.payload.user
      };
    default:
      return state;
  }
};
