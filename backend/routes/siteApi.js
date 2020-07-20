
const express = require('express');
const api = express.Router();
const { time } = require('../controllers/blog');


//incoming res handle
//Since we will have many routes its good practice to create a controller folder
//were we place our call back function for the api.get()
// replace callback with a controller function

api.get('/', time);


 module.exports = api;   //in order to use it in the server we need to xport it



 //______Step 2

// const express = require('express');
// const api = express.Router();



// //incoming res handle

// api.get('/', (req, res) => {
//     res.json({ time: Date().toString() });
// });


// module.exports = api;   //in order to use it in the server we need to xport it







