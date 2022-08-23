const router = require("express").Router();
const Center = require("../model/Center.table");

router.get("/", async (req, res) => {
  const centers = await Center.find();
  res.json(centers);
});
// create tea center
router.post("/create", async (req, res) => {
  try {
    const newCenter = await Center.create(req.body);
    res.json(newCenter);
  } catch (error) {
    console.log(error);
    res.json({
      mesage: error.message,
    });
  }
});
// delete center
router.delete("/delete/:id", async (req, res) => {
  try {
    const center = await Center.findById(req.params.id);
    if (center) {
      await Center.findByIdAndDelete(req.params.id);
      res.json({ message: "center deleted" });
      // console.log(sale)
    } else {
      return res.status(501).json({ message: "center does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

// update tea center
// when updating we pass (name):
router.put("/update/:id",async(req,res)=>{
  const currentCenter = await Center.findByIdAndUpdate(req.params.id,req.body, { returnOriginal: false })

  res.json(currentCenter);
})

module.exports = router;
