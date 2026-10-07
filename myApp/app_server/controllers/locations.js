const login = function(req,res){
    res.render('login.pug')
};

const register = function(req,res){

    res.render('register.pug')
};

const information = function(req,res){

    res.render('information',{

      tracks: [
    { title: 'Pretty green eyes', album: 'NpmInstall', last: '90 min ago', played: 2021, playing: true },
    { title: 'Ghost in the Machine', album: 'Cybernetic Soul', last: '22 mins ago', played: 92 },
    { title: 'Stardust Horizon', album: 'Nebula Dreams', last: '1 hour ago', played: 115 },
    { title: 'Algorithm of Love', album: 'Cold Code', last: '4 hours ago', played: 280 },
    { title: 'Prism Void', album: 'Reflections', last: 'Yesterday', played: 64 },
    { title: 'New title', album: 'New Album', last: 'Just Now im writing', played: 1 }
  ]
    
        
    });


};




module.exports = {

   login,
   register,
   information,
};