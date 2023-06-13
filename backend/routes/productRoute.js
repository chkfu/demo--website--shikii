const express = require('express');
const productController = require('./../controllers/productController');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
    .route('/get-new-items')
    .get(productController.getNewItems);

router
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct);

router
    .route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

router.route('/:id/reviews')
    .get(authController.protect, reviewController.getReview)
    .post(authController.protect, reviewController.setDetails, reviewController.createReview);


module.exports = router;
