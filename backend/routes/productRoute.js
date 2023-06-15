const express = require('express');
const productController = require('./../controllers/productController');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./reviewRoute');

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
    .get(productController.getProduct);


router
    .use('/:id/reviews', reviewRouter);


module.exports = router;
