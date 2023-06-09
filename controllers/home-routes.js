const router = require("express").Router();
const { User, Note } = require("../models");
const withAuth = require("../utils/auth");


//Prevent non logged in User from viewing the home page

router.get("/", withAuth, async (req, res) => {
  try {
    const notesData = await Note.findAll({
      attributes: { exclude: ["password"] },
    });

    const notes = notesData.map((note) => {
      return {
        title: note.name,
        word: note.word,
        body: note.details,
      };
    });

    res.render("homepage", { notes });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/connection", withAuth, async (req, res) => {

  if (!req.session.logged_in) {
    console.log("redirecting new-connection to home");
    debugger;
    res.redirect("/");
    return;
  }
  try {
    const userData = await User.findByPk(req.session.user_Id, {
      include: [{ model: Note }],
    });


      const user = userData.get({ plain: true });

      console.log(userData);
      console.log(user);


    res.render("connection", {
      ...user,
      //user: user.toJSON(),
      // Pass the logged in flag to the template
      logged_In: req.session.logged_In,
    });
  } catch (err) {
    res.status(500).json(err);

  }
});


// notes by id
router.get("/notes/:id", withAuth, async (req, res) => {
  try {
    const noteData = await Note.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    const note = noteData.get({ plain: true });

    res.render("note", { note, logged_In: req.session.logged_In });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_In) {
    res.render("/");
    return;
  }

  res.render("login");
});


  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render("signup");
  });

module.exports = router;
