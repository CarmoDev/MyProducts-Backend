const { Router } = require('express');
const categoryController = require('./app/controllers/categoryController');
const ProductController = require('./app/controllers/ProductController');

const router = Router();

// Products Routes
router.get('/products', ProductController.index);

router.get('/products/:id', ProductController.show);

router.delete('/products/:id', ProductController.delete);

router.post('/products', ProductController.store);

router.put('/products/:id', ProductController.update);

router.patch('/products/:id', ProductController.updateQuantity);

// Categories routes
router.get('/categories', categoryController.index);
router.get('/categories/:id', categoryController.show);
router.post('/categories', categoryController.store);
router.put('/categories/:id', categoryController.update);
router.delete('/categories/:id', categoryController.delete);

module.exports = router;