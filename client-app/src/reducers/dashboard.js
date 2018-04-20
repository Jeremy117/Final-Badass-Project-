export default (state = {}, action) => {
  switch (action.type) {
    case "DASHBOARD_LOADED":
      return {
        ...state,
        currentUser: action.payload.currentUser
      };
    case "PLAYERS_LOADED":
      return {
        ...state,
        players: action.payload.players
      };
    case "EVENTS_LOADED":
      return {
        ...state,
        events: action.payload.events
      };
    default:
      return state;
  }
};
