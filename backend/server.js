const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require ('mongoose');

 require ('dotenv').config();

 //importing routes
 const siteApi = require('./routes/siteApi')   //we use siteBlogRoutes as a middleware --blogR
 const authRoutes = require('./routes/auth')

//  const learnThis = require ('./validators/thisLearn') 
 const app = express();

 
 // cd Desktop/projects/next-express-app/siteapp
 //db connection WITH mongoose
 
 mongoose
 .connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}) 
.then(() => console.log('DB connected'));


//middlewares 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());


                                            //browsers will trigger cors error when the backend and frontend are running on different ports
                                            //and to avoid that we will configure cors to help browsers to handle the url is its in development mode
if(process.env.NODE_ENV = 'development')
          {
    app.use(cors({origin: `${process.env.CLIENT_URL}`  }));
}


//routes siteRoutes, signup

app.use('/api', siteApi)                       //add api as 1st argument so as show as prefix in all our api requests
app.use('/api', authRoutes);



// only test--purpose


//end test



//handle the port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});