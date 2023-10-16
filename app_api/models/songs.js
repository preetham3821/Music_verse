// Requiring mongoose
var mongoose = require('mongoose');

/* Defining Schemas */

// Review Schema
var reviewSchema = new mongoose.Schema({

    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

var songsInfoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: [String],
    description: String,
    pageCount: Number,
    categories: [String],
    averageRating: Number,
    reviews:[reviewSchema]
});

var LoginSchema = new mongoose.Schema({
    username : {
        type : String
    },
    password : {
        type : String
    },
});

var RegisterSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    confirmpassword : {
        type : String,
        required : true,
    }
});

const Review = mongoose.model('Reviews', reviewSchema);

const Song = mongoose.model('Song', songsInfoSchema);

const Login = mongoose.model('login',LoginSchema);

const Register = mongoose.model('register',RegisterSchema);

module.exports = {Review, Song, Login, Register};
