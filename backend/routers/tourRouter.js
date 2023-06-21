import Router from 'express';

import { tourController } from '../controllers/tourController.js'

export const tourRouter = new Router();

tourRouter.get('/', tourController.getAll);

tourRouter.post('/', tourController.createTour);

tourRouter.delete('/:id', tourController.deleteById);

tourRouter.get('/:id', tourController.getById);



