export default (state = {}, action) => {
  switch (action.type) {
    case "PLAYERS_LOADED":
      return {
        ...state,
        players: action.payload.players
      };
    case "PLAYER_ADDED":
      return {
        ...state,
        player: action.payload.player
      };
    default:
      return state;
  }
};
