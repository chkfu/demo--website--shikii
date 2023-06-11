const express = require('express');
const FAQ = require('./../models/faqModel');
const catchAsync = require('./../util/catchAsync');
const AppError = require('./../util/AppError');

exports.getAllFAQ = catchAsync(async (req, res, next) => {
  const data = await FAQ.find();
  res.status(200).json({
    status: 'success',
    data
  });
});

exports.createNewFAQ = catchAsync(async (req, res, next) => {

  const newData = await FAQ.create(req.body);

  if (!newData) {
    next(new AppError('FAQ posting Error', 404));
  }

  res.status(200).json({
    status: 'sucess',
    data: newData
  });
})

