const {Login,Register} = require("../../app_api/models/songs");

module.exports.about=function(req,res){
    res.render('generic-text', {title : 'About'});
};

module.exports.signin = function(req, res){
    res.render('sign-in',{title:'Sign In'});
};

module.exports.signin_post = function(req, res){
    const body = req.body;
    try{
        const login = new Login({
            username : body.username,
            password : body.password,
        });
        login.save();
        res.redirect('/');

    }
    catch(err){
        res.status(500).send('Internal server error');
    }
    
};

module.exports.register = function(req, res){
    res.render('register',{title:'Register'});
};

module.exports.register_post = function(req,res){
    const body = req.body;
    try{
        const register = new Register({
            username : body.username,
            email : body.email,
            password : body.password,
            confirmpassword : body.confirmpassword,
        });
        register.save();
        res.redirect('/');

        }
        catch(err){
            res.status(500).send('Internal server error');
        }
}