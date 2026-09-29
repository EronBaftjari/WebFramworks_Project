const login = function(req,res){
    res.render('login.pug')
};

const register = function(req,res){

    res.render('register.pug')
};

const information = function(req,res){

    res.render('information.pug')
};

module.exports = {

   login,
   register,
   information,
};