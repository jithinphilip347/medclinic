import express from 'express';
import { test } from '../controllers/userController.js';


const router = express.Router();

router.post('/test',test)

export default router