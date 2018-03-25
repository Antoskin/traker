import axios from 'axios'

export default function () {
	return axios.create( {
		baseURI:'http://localhost:8081'
	} )
}