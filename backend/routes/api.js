import express from 'express';
import { obtenerDatosInicio, obtenerPlatos, obtenerPlatoPorSlug } from '../controllers/apiController.js';
const router = express.Router();

router.get('/api/sobrePlatos', obtenerDatosInicio);
router.get('/api/platos', obtenerPlatos);
router.get('/api/platos/:slug', obtenerPlatoPorSlug);

export default router;