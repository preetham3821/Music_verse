const { Review } = require("../../app_api/models/songs");

/* Home page */
module.exports.homelist = function(req,res){
    res.render('songs-list', {title : "Home"});
};

/* Songs page */
module.exports.songsInfo1 = function(req,res){
    res.render('songs-info1', {title : "Songs Information"});
};

module.exports.songsInfo2 = function(req,res){
    res.render('songs-info2', {title : "Songs Information"});
};

module.exports.catalogue= function(req,res){
    res.render('songs-catalogue', {title : "Songs Catalogue"});
};

module.exports.songsInfo3 = function(req,res){
    res.render('songs-info3', {title : "Songs Information"});
};


module.exports.songsInfo4 = function(req,res){
    res.render('songs-info4', {title : "Songs Information"});
};

/* Review page */
module.exports.addReview = function(req,res){
    res.render('songs-review-form', {title : "Add Review"});
};


module.exports.addReview_post = function(req, res) {
    const body = req.body;
    try {
        const review = new Review({
            author: body.name,
            rating: body.rating,
            reviewText: body.review
        });
        review.save();
        console.log(review);
        res.redirect('/');
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

