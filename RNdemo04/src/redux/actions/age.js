import store from '../store';


export const GET_AGE = 'GET_AGE'
export const getAge = () => {
	//const dispatch = store.dispatch;
	// await ajax({
	// 	data: {},
	// 	success: (courseDetail) => {
	// 		console.log(courseDetail);
			store.dispatch({type: GET_AGE, ages:'25'});
	// 	}
	// });
};