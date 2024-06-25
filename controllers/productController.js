
const Product = require('../models/product')
const { validateProduct } = require("../validator")

exports.createProduct = async (req, res) => {
    try {
        const { error } = validateProduct(req.body)
        if (error) {
            res.json(error.details[0].message)
        } 

        const product = new Product({
            category: req.body.category,
            name: req.body.name,
            img: req.file.path,
            price: req.body.price,
            featured: req.body.featured,
            topSelling: req.body.topSelling
        })

        const productItem = await product.save()
        res.json(productItem)
    } catch (error) {
        console.log({ message: error.message });
    }
},

    //get all
    exports.getAllProduct = async (req, res) => {
        try {
            let product = await Product.find()
            res.json(product)
        } catch (error) {
            return res.json(error.details)
        }
    }




//get one
exports.getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            res.json("Not found")
        }
        res.json(product)
    }
    catch (error) {
        return res.json(error.details)
    }
}

exports.getFeauturedProducts = async (req, res) => {
    try {
        const featured = await Product.find({ featured: true }).populate('category')
        res.json(featured)
    } catch (error) {
        res.json({ message: error.message })
    }

}

exports.getTopSellingProducts = async (req, res) => {
    try {
        const topSelling = await Product.find({ topSelling: true }).populate('category')
        res.json(topSelling)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//delete
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.json("Not found")
        }
        res.json(product);
    }
    catch (error) {
        return res.json(error.details)
    }
}


//update
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            res.json("Not found")
        }
        const { error } = validateYes(req.body)
        if (error) {
            res.json(error.details[0].message)
        }
        yes.category = req.body.category,
            yes.name = req.body.name,
            yes.img = req.file.path,
            yes.price = req.body.price,
            yes.featured = req.body.featured,
            yes.topSelling = req.body.topSelling


        const yesItem = await yes.save()
        res.json(yesItem)
    }catch (error) {
        console.log({message: error.message});
    }
    
}



