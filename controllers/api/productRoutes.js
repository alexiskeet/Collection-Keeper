const router = require('express').Router();
const Product = require('../../models/Product');

//route to create/add a product
router.post('/', async (req,res) => {
    try {
        const productData = await Product.create({
            product_name: req.body.product_name,
            description: req.bosy.description,
            product_date: req.body.product_date,
            product_location: req.body.product_location,
        });
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//File is not finished yet
//add put connection for updating cards