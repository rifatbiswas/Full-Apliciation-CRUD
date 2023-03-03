const express = require("express");
const ProductController = require("../controller/ProductController.js")
const router = express.Router();

//API Routing.........

router.post("/create" ,ProductController.CreateProduct)
router.get("/read" ,ProductController.ReadProduct)
router.post("/update/:id" ,ProductController.UpdateProduct)
router.get("/delete/:id" ,ProductController.DeletProduct)


module.exports= router;