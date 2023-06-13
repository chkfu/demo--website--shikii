const express = require('express');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Product Brand is required.'],
    },
    name: {
        type: String,
        required: [true, 'Product Name is required.'],
    },
    price: {
        type: Number,
        required: [true, 'Product Price is required.'],
    },
    coverImage: {
        type: String,
    },
    series: {
        type: String,
    },
    keywords: {
        type: [String],
    },
    averageRating: {
        type: Number,
    },
    numOfRating: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    description: {
        type: String
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

productSchema.virtual('wishlist', {
    ref: 'Wishlist',
    foreignField: 'product',
    localField: '_id'
});

productSchema.virtual('review', {
    ref: 'Review',
    foreignField: 'product',
    localField: '_id'
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
