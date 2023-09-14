// from package
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
// from file
const AppError = - require('./../util/AppError');
const catchAsync = require('./../util/catchAsync');
const User = require('./../models/userModel');
const Wishlist = require('../models/wishlistModel');

// Better Choice:
// To improve, better to call/update wishlist in UserController
// => avoid loop in O(n)^2, but get the specific user directly in O(n)
exports.getWishlist = async (req, res) => {
  // choose wishlist item
  const currWishlist = await Wishlist.aggregate(
    [
      {
        $match: {
          user: mongoose.Types.ObjectId(req.user),
        },
      },
      {
        $project: {
          product: 1,
          _id: 0,
        },
      },
      {
        $unwind: {
          path: "$product",
        },
      },
      {
        $group: {
          _id: "$product",
          count: {
            $sum: 1,
          },
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "ProductData",
        },
      },
      {
        $project: {
          count: 1,
          ProductData: {
            _id: 1,
            brand: 1,
            name: 1,
            price: 1,
            coverImage: 1,
          },
          _id: 0,
        },
      },
      {
        $unwind: {
          path: "$ProductData",
        },
      },
      {
        $project: {
          count: 1,
          ProductData: 1,
          catTotal: {
            $multiply: [
              "$count",
              "$ProductData.price",
            ],
          },
        },
      },
      {
        $group: {
          _id: 0,
          finalTotal: {
            $sum: "$catTotal",
          },
          wishlist: {
            $push: {
              product: "$ProductData",
              count: "$count",
              catTotal: "$catTotal",
            },
          },
        },
      },
    ]
  );

  // response
  res.status(200).json({
    status: 'success',
    data: {
      wishlist: currWishlist,
    }
  });
};


exports.updateWishlist = catchAsync(async (req, res, next) => {

  // get data from mongodb, the original user wishlist
  const original_wishlist = await Wishlist.findOne({ user: req.user });

  // copy the wishlist to another array
  let wishlist_arr = [...original_wishlist.product];

  // updated the copy of the array with new input
  const ArrayUpdating = (item, num) => {
    for (let i = 0; i < num; i++) {
      wishlist_arr.push(item);
    }
    return wishlist_arr;
  };
  ArrayUpdating(req.body.input, req.body.quantity);


  //  use Update function to save the updated list 
  const updated_wishlist = await Wishlist
    .findOneAndUpdate({ user: req.user._id },
      {
        product: wishlist_arr
      },
      {
        new: true,
        runValidators: true,
      });

  res.status(200).json({
    status: 'success',
    data: {
      wishlist: wishlist_arr
    }
  });
});

exports.deleteWishlistItem = catchAsync(async (req, res, next) => {

  // get data from mongodb, the original user wishlist
  const original_wishlist = await Wishlist.findOne({ user: req.user });

  // copy the wishlist to another array
  let wishlist_arr = [...original_wishlist.product];

  // filter the copy of the array
  const ArrayDeleting = (item) => {
    const changed = wishlist_arr.filter((product) => product.toString() !== item);
    return wishlist_arr = changed;
  };
  ArrayDeleting(req.body.input);

  //  use Update function to save the updated list 
  const updated_wishlist = await Wishlist
    .findOneAndUpdate({ user: req.user._id },
      {
        product: wishlist_arr
      },
      {
        new: true,
        runValidators: true,
      });

  res.status(200).json({
    status: 'success',
    data: {
      wishlist: wishlist_arr
    }
  });
});
