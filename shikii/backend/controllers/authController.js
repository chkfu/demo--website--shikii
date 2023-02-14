const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../util/catchAsync');
const AppError = require('./../util/AppError');
const sendEmail = require('./../util/email');


const signinToken = id => {
  return jwt.sign({ id },
    process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
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

  const token = signinToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser
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
  let token = signinToken(user._id);
  const cookieOptions = {
    httpOnly: true,
    secure: true
  };

  console.log(token);
  res.cookie('jwt', token, {
    expires: new Date(Date.now() + 9999999),
    HttpOnly: false
  });


  console.log('-------------login--req.headers-authorization', req.headers.authorization);

  req.user = user;
  res.locals.user = user;
  console.log('-------------login--res.locals.user', req.locals.user);

  console.log('-------------login--end');
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

  console.log('---------------protect start');

  // get token
  let token;

  // adopted
  console.log('------------protect-req.headers', req.headers);
  // req.headers.authorisation === undefined
  console.log('-----------protect--req.headers.authorization', req.headers.authorization);
  // req.headers.authorisation === no display
  console.log('------------protect-req.cookie.jwt', req.cookie.jwt);

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookie.jwt) {
    token = req.cookie.jwt;
  }

  console.log('------------protect-token', token);

  if (!token) return next(new AppError('Failed to access without login', 401));

  console.log('---------------check token');

  // validation
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);


  console.log('---------------decoded');

  // check user
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('Token is not existed', 401));
  }

  req.user = currentUser;
  console.log('**********************res.user', req.user);
  res.locals.user = currentUser;
  console.log('**********************res.user', res.locals.user);
  next();
});


exports.isLoggedIn = catchAsync(async (req, res, next) => {

  // get token
  let token;
  if (req.cookie.jwt) {
    const decoded = await promisify(jwt.verify)(req.cookie.jwt, process.env.JWT_SECRET);

    // check user
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next();
    }

    res.locals.user = currentUser;
    next();
  }
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