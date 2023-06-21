import { Tour } from './../types/Tour';
import axios from 'axios'

class TourApi {
	async createTour(Tour: Tour) {
		const { data } = await axios.post<Tour>('http://localhost:5000/tours', Tour)
		return data
	}
	async getTours() {
		const { data } = await axios.get<Tour[]>('http://localhost:5000/tours')
		
		return data
	}

	async getTour(id?: string) {
		const { data } = await axios.get<Tour>('http://localhost:5000/tours/' + id)
		return data
	}

	async deleteTour(id?: string) {
		const { data } = await axios.delete<Tour>('http://localhost:5000/tours/' + id)
		return data
	}

}

export const tourApi = new TourApi()