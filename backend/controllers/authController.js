const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const Wishlist = require('../models/wishlistModel');
const catchAsync = require('./../util/catchAsync');
const AppError = require('./../util/AppError');
const sendEmail = require('./../util/email');


const signinToken = (id) => {
  return jwt.sign({ id },
    process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

exports.logout = (req, res) => {

  req.user = null;
  res.locals.user = null;

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now())
  };

  res.status(200).json({
    status: 'success',
    data: null
  });
};

exports.signup = catchAsync(async (req, res, next) => {

  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  const newWishlist = await Wishlist.create({
    user: newUser._id,
    list: []
  });

  const token = signinToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
      list: newWishlist
    }
  });
});


exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // failures with login details missing
  if (!email || !password) {
    return next(new AppError('Email or Password is not found', 400));
  }
  // failures with login details mismatched
  const user = await User.findOne({ email }).select('+password');
  if (!user || !user.correctPassword(password, user.password)) {
    return next(new AppError('Incorrect Email or Password', 401));
  }

  // cookies adoption
  const token = signinToken(user._id);

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
  };

  res.cookie('jwt', token, cookieOptions);
  res.cookie('userId', user._id.toString(), cookieOptions);

  req.user = user;
  res.locals.user = user;

  res.status(200).json({
    status: 'success',
    token,
    data: {
      status: 'success',
      user
    }
  });
});


exports.protect = catchAsync(async (req, res, next) => {

  let token;
  // adopted
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) return next(new AppError('Failed to access without login', 401));

  // validation
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // check user
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('Token is not existed', 401));
  }

  // define user
  req.user = currentUser;

  next();
});


exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('No permission for access', 403));
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  const resetToken = User.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `http://${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Please reset your new password with ${resetURL}...`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Reset your password',
      message
    });

    res.status(200).json({
      status: success,
      message: 'Token sent...'
    });
  }
  catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new AppError('Error found in email sending...'), 500);
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {

  const hashedToken = crypto
    .createHash('sha256')
    .update(req.prarams.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  if (!user) {
    return next(new AppError('token is invalid or expired', 404));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
});

exports.userChangePassword = catchAsync(async (req, res, next) => {

  // previos: protect middleware verified user's identity

  // step 1 - identify new password === confirmed password
  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new AppError('New Passwords are not matched.', 400));
  }

  // step 2 - identify new password != previous password
  if (req.body.newPassword === req.body.currPassword) {
    return next(new AppError('New Password is same as your old password.', 400));
  }

  // ****  BUG: PASSWORD CHANGE BUG  ****
  // ****  BUG: PASSWORD CHANGE BUG  ****
  // ****  BUG: PASSWORD CHANGE BUG  ****

  // step 3 - identity password with crypted one in mongodb
  const user = await User.findOne({ _id: req.user._id }).select('+password');

  console.log(req.body.currPassword);
  console.log(user.password);
  if (!user || !(await user.correctPassword(req.body.newPassword, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // ****  BUG: PASSWORD CHANGE BUG  ****
  // ****  BUG: PASSWORD CHANGE BUG  ****
  // ****  BUG: PASSWORD CHANGE BUG  ****

  //  step 3b: if bcrypted compare password not match, return error
  if (!user.correctPassword(req.body.currPassword, user.password)) {
    console.log(req.body.currPassword, user.password);
  }

  // // step 4 - if all passed, change
  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.confirmPassword;
  await user.save();

  res.status(200).json({
    status: 'success'
  });
});
