// this file will check if required entries are fulfilled

const { check } = require('express-validator');

// xport func validator so to use in routers
// in this func we check all the field entries 

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Please fill in Names'),  // msg for if name not filled
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
];


//SignIn validators

exports.userSigninValidator = [

    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
];







