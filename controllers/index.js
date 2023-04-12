const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js')
const productRoutes = require('.controllers/api/productRoutes.js')
const userRoutes = require('.controllers/api/userRoutes.js')


router.use('/', homeRoutes);
router.use('/api', productRoutes);
router.use('/api', userRoutes);


router.use((req, res) => {
    res.status(404).end();
  });

  
module.exports = router;
