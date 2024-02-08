import { Router } from 'express';
import { loginUsuario } from '../controllers/loginUsuario.controller.js';

const router = Router();

// Ruta para el inicio de sesión del usuario
router.post('/login', loginUsuario);

export default router;

