const router = require('express').Router();
const { Product } = require('../../models/Product');

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

// File is not finished yet
// add put connection for updating cards

router.put('/:id', async (req,res) => {
  try {
      const product = await Product.update(
          {
          product_name: req.body.product_name,
          description: req.bosy.description,
          product_date: req.body.product_date,
          product_location: req.body.product_location,
          },
          {
              where: {
                  id: req.params.id,
              },
          }
      );
      res.status(200).json(product);
  } catch (err) {
      res.status(500).json(err);
  }
});

// delete a card
router.delete('/:id', async (req,res) => {
    try{
        const deletedProducts = await Product.destroy({
            where: {
                id: req.params.id,
            },
        })
    res.status(200).json({message: "Successfully deleted collection item"})
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;