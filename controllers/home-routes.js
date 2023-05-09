const router = require('express').Router();
const { User, Note } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in User from viewing the home page
router.get('/', withAuth, async (req, res) => {

    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['email', 'ASC']],
        });

        const users = userData.map((user) => user.get({ plain: true }));

        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});





router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.render('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  