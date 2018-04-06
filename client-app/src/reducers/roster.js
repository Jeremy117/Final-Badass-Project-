export default (state = {}, action) => {
  switch (action.type) {
    case "ROSTER_LOADED":
      return {
        ...state,
        roster: action.payload.roster
      };
    case "ROSTER_PLAYER_ADDED":
      return {
        ...state,
        addPlayerErrors: action.error ? action.payload.errors : null,
        comments: action.error
          ? null
          : [...state.comments, action.payload.player]
      };

    default:
      return state;
  }
};
