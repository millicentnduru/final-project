const router = require("express").Router();
const { findById } = require("../model/Sale.table");
const Sale = require("../model/Sale.table");

router.get("/", async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
});

//create sales
router.post("/create", async (req, res) => {
  try {
    const newSale = await Sale.create(req.body);
    res.json(newSale);
  } catch (error) {
    console.log(error);
    res.json({
      mesage: error.message,
    });
  }
});
router.delete("/delete", async (req, res) => {
  try {
   const sale=await Sale.findById(req.body.id)
   if (sale){
    await Sale.findByIdAndDelete(req.body.id);
    res.json({ message: "sale deleted" });
    // console.log(sale)
   }
   else{
    return res.status(501).json({message:"sale does not exist"})
   }
   
   
   
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

module.exports = router;