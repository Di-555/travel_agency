import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	password: { type: String, required: true },
	username: { type: String, required: true },
	role: { type: String }
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema)
