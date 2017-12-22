import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const enhancer = compose(
	applyMiddleware(thunk)
);

// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const initState = {};
let store = createStore(
	reducer,
	initState,
	enhancer,
);

export default store;