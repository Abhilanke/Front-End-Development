function reducer(state, action) {
  if (action.type === "INCREMENT") {
    state = state + 1;
  }
  if (action.type === "DECREMENT") {
    if (state === 0) {
      state = 0;
    } else {
      state = state - 1;
    }
  }

  return state;
}
export default reducer;
