const crypto = require('crypto');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'User First Name is required.'],
        },
        lastName: {
            type: String,
            required: [true, 'User Last Name is required.'],
        },
        gender: {
            type: String
        },
        dateOfBirth: {
            type: Date
        },
        email: {
            type: String,
            required: [true, 'User Email is required.'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'User Password is required.'],
            minlength: 8,
            select: false
        },
        passwordConfirm: {
            type: String,
            required: [true, 'User Password Confirm is required.'],
            validate: {
                validator: function (el) {
                    return el === this.password;
                },
                message: 'Passwords are not matched.'
            }
        },
        passwordChangedAt: {
            type: Date
        },
        coverimage: {
            type: String,
            default: 'user-icon-default01.jpg'
        },
        role: {
            type: String,
            enum: ['admin', 'manager', 'staff', 'user'],
            default: 'user'
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        passwordChangedAt: {
            type: Date
        },
        passwordResetToken: {
            type: String
        },
        passwordResetExpires: {
            type: Date
        },
        token: {
            type: String
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

// middleware

userSchema.virtual('wishlist', {
    ref: 'Wishlist',
    foreignField: 'user',
    localField: '_id'
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
    next();
});

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword) {
    console.log(candidatePassword, userPassword);
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.passwordChangedAfter = async function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JWTTimestamp < changedTimestamp;
    }
    return false;
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};


const User = mongoose.model('User', userSchema);

module.exports = User;
