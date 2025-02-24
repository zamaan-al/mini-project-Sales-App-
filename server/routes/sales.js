const express=require("express");
const router= express.Router();
const salesController=require("../controllers/sales")
router.post('/',salesController.postSales);
router.get('/',salesController.allSales);
router.put("/:saleId",salesController.updateSale);
router.delete("/:saleId",salesController.deleteSale);

module.exports=router;