//Import the mongoose module
var mongoose = require('mongoose');

const user = "rentaware";
const password = "GOvReecHodkagA6";

const mongoDb = "mongodb://"+user+":"+password+"@ds131932.mlab.com:31932/rentawaredb";
mongoose.connect(mongoDb);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports =  mongoose;