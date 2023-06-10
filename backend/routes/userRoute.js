const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const wishlistController = require('./../controllers/wishlistController');


// middleware
const router = express.Router();


// basic routes
router.get('/logout', authController.logout);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.route('/get-current-user').get(authController.protect, userController.getMe);
router.route('/wishlist')
    .get(authController.protect, wishlistController.getWishlist)
    .patch(authController.protect, wishlistController.updateWishlist);
router.route('/wishlist/removeItem').patch(authController.protect, wishlistController.deleteWishlistItem);


// Staff Permissions
router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);


router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);



module.exports = router;
