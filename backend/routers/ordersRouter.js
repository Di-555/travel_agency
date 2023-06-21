import Router from 'express';

import { ordersController } from '../controllers/ordersController.js'
export const ordersRouter = new Router();


ordersRouter.get('/', ordersController.getAll);
ordersRouter.get('/user/:id', ordersController.getByUserId);
ordersRouter.delete('/:id', ordersController.deleteOrder);
ordersRouter.put('/:id', ordersController.confirmOrder);
ordersRouter.post('/', ordersController.createOrder);


