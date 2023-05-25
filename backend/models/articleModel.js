const express = require('express');
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Article Title is required.'],
    },
    content: {
        type: String,
        required: [true, 'Article Content is required.'],
    },
    coverImage: {
        type: String,
    },
    numOfRead: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
