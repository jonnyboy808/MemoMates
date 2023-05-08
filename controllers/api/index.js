const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const noteRoutes = require('./noteRoutes');

router.use('/users', userRoutes);
router.use('/notes', noteRoutes);

module.exports = router;
