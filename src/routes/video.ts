import express from 'express';
import VideoController from '../controllers/video';

const router = express.Router();

router.get('/stream/:id', VideoController.streamVideo)
router.get('/stream2/:id', VideoController.streamVideo2)

export default router