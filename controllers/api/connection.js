const router = require('express').Router();
const { Connection } = require('../../models/');
const withAuth = require('../../utils/auth');
// router to create a connection after user logs in
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newConnection = await Connection.create({ ...body, userId: req.session.userId });
    res.json(newConnection);
  } catch (err) {
    res.status(500).json(err);
  }
});
// router to update post after auth
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// router to delete a connection by its id after auth
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Connection.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
