import Api from './Api';

export default {
	register (credentials) { //credentials - полномочия
		return Api().post('register', credentials) // localhost:8081/register 
	}
} 




//!!!! it will cals from another file
// Auth.register({
// 	login: 'Antikarat',
// 	pass: '124'
// })