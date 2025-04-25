import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { checkAuth, login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/check', protectRoute, checkAuth);

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;