const express = require('express');
const mongoose = require('mongoose');


const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });


// middleware
wishlistSchema.pre('/^find/', function (next) {
  this.populate({
    path: "user",
    select: '_id'
  }).populate({
    path: "product",
    select: 'brand name price'
  });
  next();
});


const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;