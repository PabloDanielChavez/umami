// routes/authRoutes.js

import express from 'express';
module.exports = router;
const { registrarUsuario, loginUsuario } = require('../controllers/authController');

router.post('/register', registrarUsuario);
router.post('/login', loginUsuario);

module.exports = router;