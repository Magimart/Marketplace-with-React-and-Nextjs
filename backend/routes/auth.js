 
const express = require('express');
const router = express.Router();
const { signup, signin, signOut, requireSignin } = require('../controllers/auth');




// import check validators, signUp and signin  
const { runValidation } = require('../validators');
const { userSignupValidator, userSigninValidator } = require('../validators/auth');

                                                                   // use validators as middlewares by 1st running userSignupVal and runvalidation is this is passed then run signup
router.post('/signup', userSignupValidator, runValidation, signup);
                                                                   //signin router
router.post('/signin', userSigninValidator, runValidation, signin);
//                               signout
router.get('/signout', signOut);

// test the user secrect page
router.get('/secret', requireSignin, (req, res) => { 

      res.json({ message : 'you can see this page' }) 
 });


 module.exports = router;   //in order to use it in the server we need to xport it

