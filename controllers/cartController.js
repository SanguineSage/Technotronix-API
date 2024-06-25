const Cart = require("../models/cart")
const Product = require("../models/product");


exports.addToCart = async (req, res) => {   
    const {productId, quantity }= req.body;
    try{
        let cart = await Cart.findOne({ user: req.user.id});
        if(!cart) {
            cart = new Cart({user: req.user.id, products:[]});    
        }
const product = await Product.findById(productId);
if(!product) {
    return res.json("Product not found");
}

const productIndex = cart.products.findIndex((item) => Item.product.tostring() === productid);

if (productIndex !== -1) {
    cart.products[productIndex].quantity == quantity;
    cart.products[productIndex].amount =product.price * cart.products[productIndex].quantity;
} else{
    cart.products.push({
        product: productId,
        quantity,
        amount: product.price * quantity
    });
}


await cart.save()
res.json(cart)
} catch (error) {
    console.log(error);
    res.json({error: error.message});
}
}

exports.addToCart = async (req, res) => {

};

exports.getCart = async(req, res)=>{
    try{
        const cart = await Cart.findOne({user: req.user.id}), 
        populate ("products.product")
        if (!cart) {
            return res.json("cart not found")
        }
        res.json(cart)

    } catch(error) {
        res.json ("server error",)
    }
}