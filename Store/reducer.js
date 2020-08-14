/**
 * @author: tongle
 *
 * @time: 2020-08-14 18:08
 *
 * @description: Title
 *
 * @function:
 *
 */

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  let newCount = 0;
  switch (action.type) {
    case 'INC':
      newCount = state.count + 1;
      break;
    case 'DEC':
      newCount = state.count - 1;
      break;
    case 'RES':
      newCount = 0;
      break;
    default:
      return state;
  }
  console.log(newCount);
  return {...state, count: newCount};
}

export default reducer;
