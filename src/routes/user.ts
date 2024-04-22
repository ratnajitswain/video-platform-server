import express from 'express';
import ExampleController from '../controllers/user';

const router = express.Router();

// Define route handlers
router.get('/', ExampleController.exampleMethod);

export default router;
