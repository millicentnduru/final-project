const router = require("express").Router();
const User = require("../model/User.table");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
// register user
router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.json({
      mesage: error.message,
    });
  }
});
// login user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ phone_number: req.body.phone_number });

    console.log(user);

    if (user) {
      if (user.password === req.body.password) {
        return res.status(200).json(user);
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(401).json({ message: "this user does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      mesage: error.message,
    });
  }
});
// delete user
router.delete("/delete", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.body.id);
    res.json({ message: "user deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "user deleted" });
  }
});

module.exports = router;
