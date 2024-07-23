const {
  // create,
  getOne,
  getAll,
  deleteOne,
  update,
  loginUser,
  signupUser,
} = require("../controllers/CreateUsers_Controllers");

const router = require("express").Router();

//CRUD users route
router.get("/", getAll);
router.get("/:id", getOne);
// router.post("/create/", create);
router.delete("/:id", deleteOne);
router.patch("/:id", update);

//Login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

module.exports = router;
