const express = require("express")
const productController  = require("../controller/productControllerDb")

const route = express.Router()



route.post("/addproduct",productController.addProduct)
route.get("/products",productController.getAllProducts)
route.get("/product/:productId",productController.getProductById)
route.delete("/product/:productId",productController.deleteProductById)
route.post("/products/filter",productController.filterProducts)
route.put("/product",productController.updateProduct)


module.exports = route 
