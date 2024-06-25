const express = require("express")
const categoryController = require("../controllers/categoryContoller")
const {auth} = require('../middleware/auth')


const router = express.Router()

router.post("/", categoryController.createCategory)

module.exports = router