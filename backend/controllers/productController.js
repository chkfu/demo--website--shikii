const express = require('express');
const Product = require('./../models/productModel');
const AppError = require('./../util/AppError');
const catchAsync = require('./../util/catchAsync');


exports.getNewItems = catchAsync(async (req, res, next) => {
    req.query.limit = 12;
    const timespan = 1000 * 60 * 60 * 24 * 30 * 12;
    const products = await Product.find(
        {
            createdAt: {
                $gte: Date.now() - timespan
            }
        });

    res.status(200).json({
        status: 'success',
        result: products.length,
        data: {
            products,
        },
    });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {

    // filter
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'fields', 'limit'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt||gte||lt||lte)\b/g, (match) => `$${match}`);
    let query = Product.find(JSON.parse(queryStr));

    // sort

    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('-createdAt');
    }

    // field

    if (req.query.fields) {
        const fields = req.query.fields.split(',').join(' ');
        query = query.select(fields);
    } else {
        query = query.select('-__v');
    }

    // pagination
    const page = req.query.page || 1;
    const limit = req.query.limit || 100;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    // 
    const products = await query;
    if (!products) {
        next(new AppError('No Product is found.', 404));
    }

    res.status(200).json({
        status: 'success',
        result: products.length,
        data: {
            products,
        },
    });
});

exports.createProduct = catchAsync(async (req, res, next) => {
    const newProduct = await Product.create(req.body);
    if (!newProduct) {
        next(new AppError('No Product is found.', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            product: newProduct,
        },
    });
});

exports.getProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        next(new AppError('No Product is found.', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            product,
        },
    });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!product) {
        next(new AppError('No Product is found.', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            product,
        },
    });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        next(new AppError('No Product is found.', 404));
    }

    res.status(200).json({
        status: 'success',
        data: null,
    });
});
