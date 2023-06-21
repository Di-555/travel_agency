import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from 'cors'

import { routerAuth } from './routers/authRouter.js'
import { tourRouter } from "./routers/tourRouter.js"
import { ordersRouter } from './routers/ordersRouter.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ extended: true }))

app.use("/tours", tourRouter);
app.use("/auth", routerAuth);
app.use("/orders", ordersRouter);

async function databaseConnection() {
	try {
		await mongoose.connect('mongodb://0.0.0.0:27017/agency');
	} catch (error) {
		console.log(error);
	}
}

app.listen(PORT, databaseConnection)
