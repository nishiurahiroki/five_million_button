export default (state = { year : 0 }, action) => {
  switch(action.type) {
    case 'SET_YEAR' :
      return { ...state, year : action.year }
    default :
      return state
  }
}
