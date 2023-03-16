const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController.js")


//API Routing.........

router.post("/create" ,ProductController.CreateProduct)
router.get("/read" ,ProductController.ReadProduct)
router.post("/update/:id" ,ProductController.UpdateProduct)
router.get("/delete/:id" ,ProductController.DeletProduct)


module.exports= router;