import { Tour } from './../../types/Tour';

export const filterTour = (tour: Tour, price: [number, number], countries: string[]) => {
	let show = true

	if (tour.price > price[1] || tour.price < price[0]) {
		show = false
	}

	if (!countries.includes(tour.title)) {
		show = false
	}

	return show
}