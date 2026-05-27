const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const{createProduct, getProduct, updateProduct, deleteProduct} = require("../controllers/productController");

router.post("/create", 
             upload.single("image"), 
             createProduct);

router.get("/get", getProduct);

router.put("/update/:id",
           upload.single("image"),
           updateProduct);

router.delete("/delete/:id", deleteProduct);

module.exports = router;

