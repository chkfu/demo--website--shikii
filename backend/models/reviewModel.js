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


reviewSchema.index({ product: 1, user: 1 }, { unique: true });

reviewSchema.pre('find', function (next) {
  this.populate({
    path: "user",
    select: 'firstName lastName'
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
    await Product.findByIdAndUpdate(productId, {
      numOfRating: data[0].numOfRating,
      averageRating: data[0].averageRating
    });
  }
  else {
    await Product.findByIdAndUpdate(productId, {
      numOfRating: 0,
      averageRating: 0
    });
  }
};

// ratings - create(save) renewal
reviewSchema.post('save', function () {
  console.log(this);
  this.constructor.calcRating(this.product);
});

// ratings - update, delete(find) renewal

reviewSchema.pre('/^findOneAnd/', async function (next) {
  this.storedData = await this.findOne();
  next();
});

reviewSchema.post('/^findOneAnd/', async function () {
  await this.storedData.constructor.calcRating(this.storedData.product);
});



const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;