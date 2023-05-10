const router = require("express").Router();
const { Note, User } = require("../../models");

// get all Notes
router.get("/", async (req, res) => {
  try {
    const NoteData = await Note.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(NoteData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//create new Note
router.post("/", async (req, res) => {
  const { name, word } = req.body;
  // create a new category
  try {
    const NoteData = await Note.create({
      name,
      word,
      // last_contact,
      // details,
      // steps,
      user_id: req.session.user_id,
    });

    res.status(200).json(NoteData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const NoteData = await Note.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!NoteData) {
      res.status(404).json({ message: "No Notes found with this id!" });
      return;
    }

    res.status(200).json(NoteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
