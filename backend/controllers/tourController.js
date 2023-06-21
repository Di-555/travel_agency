
import { Tour } from '../models/Tour.js'

class TourController {
	async getAll(req, res) {
		try {
			const tours = await Tour.find();
			return res.status(200).json(tours);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async createTour(req, res) {
		try {
			const tour =	await Tour.create({ ...req.body })
			res.status(201).json(tour);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async deleteById(req, res) {
		const tourId = req.params.id;

		try {
			await Tour.findByIdAndDelete(tourId);

			const tours = await Tour.find()

			return res.json(tours);
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}

	}
	async getById(req, res) {
		const tourId = req.params.id;

		try {
			const tour = await Tour.findById(tourId);

			return res.json(tour);
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}

	}
}

export const tourController =  new TourController()
