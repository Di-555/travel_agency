import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
	tour: {
		type: Schema.Types.ObjectId,
		ref: 'Tour'
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	countPeoples:{type: Number, required: true },
	status:{type: String, required: true },
	fio:{type: String, required: true },
	mail:{type: String, required: true },
	price: { type: Number, required: true },
}, { timestamps: true });

OrderSchema.virtual('virtualTour', {
	ref: 'Tour',
	localField: 'tour',
	foreignField: '_id',
});

OrderSchema.virtual('virtualUser', {
	ref: 'User',
	localField: 'user',
	foreignField: '_id',
});

OrderSchema.set('toObject', { virtuals: true });
OrderSchema.set('toJSON', { virtuals: true });

export const Order = mongoose.model('Order', OrderSchema)
