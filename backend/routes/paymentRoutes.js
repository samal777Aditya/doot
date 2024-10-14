import express from 'express';
import { stripePayment } from '../controllers/paymentController.js';
const router = express.Router();

router.post('/create-payment-intent', stripePayment);

export { router as paymentRoutes };