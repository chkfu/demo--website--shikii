const express = require('express');
const mongoose = require('mongoose');
const User = require('./../models/userModel');
const catchAsync = require('./../util/catchAsync');

// controllers for users

exports.getCurrUser = catchAsync(async (req, res, next) => {
    // auth.protect already set up currUser detail
    res.status(200).json({
        status: 'success',
        data: {
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
            gender: req.user.gender,
            age: req.user.age,
            role: req.user.role,
            image: req.user.coverimage
        }
    });
});

exports.updateCurrUser = catchAsync(async (req, res, next) => {
    const newUpdate = await User.findByIdAndUpdate(req.user._id, req.body, {
        runValidators: true,
        new: true
    });
    res.status(200).json({
        status: 'success',
        update: newUpdate
    });
});


// controllers for staff

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find().populate('wishlist');
    res.status(200).json({
        status: 'success',
        data: {
            users
        },
    });
});

exports.createUser = catchAsync(async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            user: newUser,
        },
    });
});

exports.getUser = catchAsync(async (req, res) => {
    const user = await User.findById(req.params.id).populate('wishlist');
    res.status(200).json({
        status: 'success',
        data: {
            user,
        },
    });
});

exports.updateUser = catchAsync(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            user,
        },
    });
});

exports.deleteUser = catchAsync(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: 'success',
        data: null,
    });
});
