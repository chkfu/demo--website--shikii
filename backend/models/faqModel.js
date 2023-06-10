const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'FAQ question is required.']
  },
  answer: {
    type: String,
    required: [true, 'FAQ answer is required.']
  },
  category: {
    type: String,
    required: [true, 'FAQ category is required.']
  },
  piority: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;