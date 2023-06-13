const express = require('express');
const mongoose = require('mongoose');
const Product = require('./productModel');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'A rating is need for comment.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: [true, 'Product Id is need for comment.']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'User Id is need for comment.']
  }
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

reviewSchema.pre('/^find/', function (next) {
  this.populate({
    path: "user",
    select: '_id firstName lastName'
  }).populate({
    path: "product",
    select: '_id'
  });
  next();
});


reviewSchema.statics.calcRating = async function (productId) {
  // data structure
  const data = await this.aggregate([
    {
      $match: {
        product: productId
      }
    },
    {
      $group: {
        _id: '$product',
        numOfRating: { $sum: 1 },
        averageRating: { $avg: '$rating' }
      }
    }
  ]);
  //  update
  if (data.length > 0) {
    Product.findOneAndUpdate(productId, {
      numOfRating: data[0].numberOfRating,
      averageRating: data[0].numberOfRating
    });
  }
  else {
    Product.findOneAndUpdate(productId, {
      numOfRating: 0,
      averageRating: 0
    });
  }
};

// ratings - create(save) renewal
reviewSchema.pre('save', function () {
  this.constructor.calcRating(this.product);
});

// ratings - update, dekete(find renewal

reviewSchema.pre('/^findOneAnd/', async function (next) {
  const storedData = await this.findOne();
  next();
});

reviewSchema.post('/^findOneAnd/', function () {
  this.storedData.constructor.calRating(this.product);
});



const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;