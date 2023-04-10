import express from 'express';
import { getEmailApi } from '../controllers/client.js';

const router = express.Router();
router.post('/email_api', getEmailApi)
export default router;