const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const noteRoutes = require('./noteRoutes');

router.use('/users', userRoutes);
router.use('/notes', noteRoutes);

module.exports = router;
