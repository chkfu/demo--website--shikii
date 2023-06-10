const express = require('express');
const faqController = require('./../controllers/faqController');

const router = express.Router();

router
  .route('/')
  .get(faqController.getAllFAQ)
  .post(faqController.createNewFAQ);

module.exports = router;
