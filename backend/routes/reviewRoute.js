const reviewController = require('./../controllers/reviewController');
const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.route('/')
  .get(authController.protect, reviewController.getReview)
  .post(authController.protect, reviewController.setDetails, reviewController.createReview);


module.exports = router;