const User = require ('../models/user');
const shortId = require('shortid');

 const jwt = require('jsonwebtoken');
 const expressJwt = require('express-jwt');

exports.signup = (req, res) => {
  
                                        //here using the email from the request body will will check if the user email exists in the db
                                        //we also bind the findOne func with moogoose execute(exec()) func which takes two values error and user.
      
     User.findOne({email: req.body.email}).exec((err, user) => {

       if(user) {   
            return res.status(400).json({
                error: 'email already exists'
              });
          }
                                            //if the user doest not exist then we generate new user using their client URl
        
                                              //lets get the client details from the req body
        const { name , email, password} = req.body;
        
        let  username = shortId.generate();          //shortId comes with a method (generate()) which genenerates shortid
        let profile = `${process.env.CLIENT_URL}/profile/${ username}`;
      
       //create user 
      let newUser = new User({ name, email, password, profile, username});
      
       newUser.save((err, success) => {

                  if(err){ 
                    return res.status(400).json({
                       error: err
                      });
                    }
                    res.json({
                      //user: success
                      message: 'Signup success! Please sign in'

                    });


                });
          });
    
};


exports.signin = (req, res) => {

  const { email, password } = req.body;          //we destruct from the request body
  // check if user exist
  User.findOne({ email }).exec((err, user) => {


      if (err || !user) {
          return res.status(400).json({
              error: 'User with that email does not exist. Please signup.'
          });
      }
      // authenticate
      //                                   //authenticate user this returns true or false ** this password passed is from the client which is in plainText

      if (!user.authenticate(password)) {
          return res.status(400).json({
              error: 'Email and password do not match.'
          });
      }

      // generate a token and send to client
      
//                                                                           //generate or create a jsonWeb token to send to the user
//                                                                           //user._id is the user we found in the db
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.cookie('token', token, { expiresIn: '1d' });   // we add cookie to the res object                       // save the token created in the cookies

         const { _id, username, name, email, role } = user;

               return res.json({
                       token,
                        user: { _id, username, name, email, role }                       //a user object that we want to send as an id

      });
  });
};


// lets signOut user by clearing the cookie created in the signin
exports.signOut = (req, res) => { 

      res.clearCookie('token');
       res.json(
           {message: 'signed out successfully' }
       );

 };

 // signIn middleware to protect routes this will pass the secrect
 exports.requireSignin = expressJwt(

     { secret: process.env.JWT_SECRET}
 );    
//  components   

// --------------------Api test


// exports.signin = (req, res) => {

//     res.json(

//         { time: Date().toString() }
        
//         );

// };