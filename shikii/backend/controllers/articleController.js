const express = require('express');
const Article = require('./../models/articleModel');

class APIFeature {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach((el) => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(
            /\b(lt|lte|gt|gte)\b/g,
            (match) => `$${match}`
        );
        this.query = Article.find(JSON.parse(queryStr));
        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.queryString.sort(sortBy);
        }
        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.queryString.select(fields);
        }
        return this;
    }

    paginate() {
        const page = this.queryString.page * 1;
        const limit = this.queryString.limit * 1 || 10;
        const skip = (page - 1) * limit;

        if (this.queryString.page) {
            this.queryString.skip(skip).limit(limit);
        }
        return this;
    }
}

exports.getAllArticles = async (req, res) => {
    const features = new APIFeature(Article.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const articles = await features.query;

    res.status(200).json({
        status: 'success',
        data: {
            result: articles.length,
            articles,
        },
    });
};

exports.createArticle = async (req, res) => {
    const newArticle = await Article.create(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            article: newArticle,
        },
    });
};

exports.getArticle = async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            article,
        },
    });
};

exports.updateArticle = async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            article,
        },
    });
};

exports.deleteArticle = async (req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: 'success',
        data: null,
    });
};
