//here we will get all our validation results from the auth.js file if there any errors and
// if no errors then use it in the middleware route

//here we construct an errors loop that we wil keep reusing

const { validationResult } = require('express-validator');


                                        //get the request name, email, passwd and  pass its through the middleware


exports.runValidation = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array()[0].msg });
    }
    next();
};
 



