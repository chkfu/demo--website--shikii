// from package
const express = require('express');
const Review = require('./../models/reviewModel');
// from files
const AppError = require('./../util/AppError');
const catchAsync = require('./../util/catchAsync');


exports.setDetails = catchAsync(async (req, res, next) => {
  if (!req.body.user)
    req.body.user = req.user.id;
  if (!req.body.product)
    req.body.product = req.params.id;
  next();
});


exports.getReview = catchAsync(async (req, res, next) => {
  const data = await Review.find({ product: req.params.id });
  res.status(200).json({
    status: 'success',
    data: data
  });
});


exports.createReview = catchAsync(async (req, res, next) => {
  const data = await Review.create(req.body);
  // if no nth is received
  if (!data)
    next(new AppError(404, 'Please provide review details...'));
  // if received
  res.status(200).json({
    status: 'success',
    data
  });
});

