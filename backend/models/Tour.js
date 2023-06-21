import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema({
	title: { type: String, required: true },
	duration: { type: Number, required: true },
	days: [{
		number: { type: Number, required: true },
		desc: { type: String, required: true },
		img: { type: String, required: true },
		town: { type: String, required: true },
	}],
	price: { type: Number, required: true },
	busySeats: { type: Number, required: true },
	allSeats: { type: Number, required: true },
	team: [
		{
			name: { type: String, required: true },
			job: { type: String, required: true },
			img: { type: String, required: true },
		}
	],
	mainImg: { type: String, required: true },
	endDate: { type: Date, required: true },
	startDate: { type: Date, required: true },
}, { timestamps: true });

export const Tour = mongoose.model('Tour', TourSchema)
