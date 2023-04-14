const router = require('express').Router();
const { Product } = require('../../models/Product');
const withAuth = require('../utils/auth');

//route to create/add a product
router.post('/', withAuth, async (req,res) => {
    try {
        const newProduct = await Product.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req,res) => {
    try{
        const productData = await Product.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!productData){
            res.status(404).json({message: 'no project found with this id'});
            return;
        }

    res.status(200).json({productData});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
