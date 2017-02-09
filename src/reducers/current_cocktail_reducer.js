export default function(state="", action) {
  switch(action.type) {
    case 'SHOW_COCKTAIL':
      return action.payload
    default:
      return state
  }
}
