const express = require('express');
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review is required.']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  products: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: [true, 'Product information is required.']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'User information is required.']
  }
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

reviewSchema.pre('/^find/', function (next) {
  this.populate({
    path: 'products',
  });
});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;