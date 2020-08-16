/**
 * @author: tongle
 *
 * @time: 2020-08-14 18:08
 *
 * @description: reducer管理数据
 *
 * @function:
 *
 */
import {INC, DEC} from './ations';

const initialState = {
  age: 18,
  name: 'TongLe',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INC:
      return {
        ...state,
        age: state.age - 1,
      };
    case DEC:
      return {
        ...state,
        age: state.age + 1,
      };
    default:
      return state;
  }
}

export default reducer;
