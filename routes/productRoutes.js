const express = require("express")
const productController =require("../controllers/productController") 
const {auth, admin} = require("../middleware/auth")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

const router = express.Router()

router.post("/", auth, admin , upload.single("img"), productController.createProduct)
// router.put("/:id", upload.single("img"), productController.updateProduct)
// router.get("/:id", upload.single("img"), productController.getSingleProduct)
router.get("/", productController.getAllProduct)
router.get("/featured", productController.getFeauturedProducts)
router.get("/topSelling", productController.getTopSellingProducts)
// router.delete("/:id", upload.single("img"), productController.deleteProduct) 

module.exports = router