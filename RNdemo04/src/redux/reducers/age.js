/**
 * Created by alan on 2017/9/18.
 */
import { GET_AGE } from '../actions/age';

const initState = {
  age: '',
};

export default (state = initState, action) => {
  const {type, ages} = action;
  switch (type) {
    case GET_AGE:
      return Object.assign({}, state, {age:ages});
	  default:
      return state
  }
}
