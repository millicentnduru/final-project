const router = require("express").Router();
const User = require("../model/User.table");

router.get("/", async (req, res) => {
  const users = await User.find({
    role: "farmer",
  }).populate("tea_center");

  res.json(users);
});
// register admin
router.post("/register/admin", async (req, res) => {
  try {
    const newUser = await User.create({ ...req.body, role: "admin" });
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.json({
      mesage: error.message,
    });
  }
});
// register Admin
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

// register agent
router.post("/register/agent", async (req, res) => {
  try {
    const newUser = await User.create({ ...req.body, role: "agent" });
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

// LOGIN AS ADMIN
router.post("/login/admin", async (req, res) => {
  try {
    const user = await User.findOne({ phone_number: req.body.phone_number });

    // console.log(user);
    if (!user) {
      return res.status(401).json({ message: "User does not exist!" });
    }

    if (user && user?.role === "admin") {
      if (user.password === req.body.password) {
        return res.status(200).json(user);
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(401).json({ message: "Not authorised!" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      mesage: error.message,
    });
  }
});

router.post("/login/agent", async (req, res) => {
  try {
    const user = await User.findOne({ phone_number: req.body.phone_number });

    // console.log(user);
    if (!user) {
      return res.status(401).json({ message: "User does not exist!" });
    }

    if (user && user?.role === "agent") {
      if (user.password === req.body.password) {
        return res.status(200).json(user);
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(401).json({ message: "Not authorised!" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      mesage: error.message,
    });
  }
});
// delete user
router.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "user deleted" });
  }
});
//update user
router.put("/update/:id", async (req, res) => {
  const currentUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  });

  res.json(currentUser);
});

module.exports = router;
