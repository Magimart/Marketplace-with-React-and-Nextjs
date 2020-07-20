//here we will export our time callback to the blog in the controller dir to be used

exports.time = (req, res) => {

    res.json(

        { time: Date().toString() + ' here is the Api for Blogs' }
        
        );

};















