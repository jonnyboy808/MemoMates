<<<<<<< HEAD
// const router = require('express').Router();
// const { Connection } = require('../models/');
// const withAuth = require('../utils/auth');
// // routes to the logged in user dashboard
// // and displays all Connections
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const connectionData = await Connection.findAll({
//       where: {
//         userId: req.session.userId,
//       },
//     });
=======
const router = require('express').Router();
const { Connection } = require('../models/');
const withAuth = require('../utils/auth');
// routes to the logged in user dashboard
// and displays all Connections
router.get('/', withAuth, async (req, res) => {
  try {
    const connectionData = await Connection.findAll({
      where: {
        user_Id: req.session.user_Id,
      },
    });
>>>>>>> f6d7edf195439b578c4ec43b3424858991de8f32

//     const connections = connectionData.map((connection) => connection.get({ plain: true }));

//     res.render('all-connections-dash', {
//       layout: 'dashboard',
//       connections,
//     });
//   } catch (err) {
//     res.redirect('login');
//   }
// });

// router.get('/new', withAuth, (req, res) => {
//   res.render('new-connection', {
//     layout: 'dashboard',
//   });
// });
// // allow to edit a connection by using its id to render a new edit
// // also gives an error 404 if not found
// router.get('/edit/:id', withAuth, async (req, res) => {
//   try {
//     const connectionData = await Connection.findByPk(req.params.id);

//     if (connectionData) {
//       const connection = connectionData.get({ plain: true });

//       res.render('edit-connection', {
//         layout: 'dashboard',
//         connection,
//       });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.redirect('login');
//   }
// });

// module.exports = router;
