import axios from 'axios'
import { User } from '../types/User'

class AuthApi {

	async registration(user: User) {
		const { data } = await axios.post<User>('http://localhost:5000/auth/reg', user)
		return data
	}

	async login(user: User) {
		const { data } = await axios.post<User>('http://localhost:5000/auth/login', user)
		return data
	}


	async userInfo(username: User['username']) {
		const { data } = await axios.get<User>('http://localhost:5000/auth/' + username)
		return data
	}
}

export const authApi = new AuthApi()