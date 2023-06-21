import { Order } from '../models/Order.js'
import { Tour } from '../models/Tour.js'
import { User } from '../models/User.js'

class OrderController {
	async getAll(req, res) {
		try {
			const orders = await Order.find()
				.populate({ path: 'virtualTour' })
				.populate({ path: 'virtualUser' })

			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async createOrder(req, res) {
		try {
			const user = await User.findById({ _id: req.body.userId })

			const tourrr = await Tour.findById({ _id: req.body.tourId })
			const tour = await Tour.findByIdAndUpdate({ _id: req.body.tourId }, { $set: { busySeats: tourrr.busySeats + req.body.seats } })

			const order = await Order.create({ user: user, tour: tour, countPeoples: req.body.seats, status: 'На рассмотрении', ...req.body });

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async confirmOrder(req, res) {
		try {
			const order = await Order.updateOne({ _id: req.params.id }, { $set: { status: 'Подтвержден' } });

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async getByUserId(req, res) {
		try {
			const orders = await Order.find({ user: req.params.id })
				.populate({ path: 'virtualTour' })
				.populate({ path: 'virtualUser' });
			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async deleteOrder(req, res) {
		try {
			const order = await Order.findByIdAndDelete({ _id: req.params.id })

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}

export const ordersController = new OrderController()
