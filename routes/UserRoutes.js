
import express from 'express';
import * as UsersController from '../controllers/userControllers.js';
import { authHandler } from '../middleware/authHandler.js';


const UsersRoutes = express.Router();


UsersRoutes.post('/register', UsersController.registerUser);
UsersRoutes.post('/login', UsersController.loginUser);

export default UsersRoutes;