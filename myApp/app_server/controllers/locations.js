const login = function(req,res){
    res.render('login.pug')
};

const register = function(req,res){

    res.render('register.pug')
};

const information = async function(req, res){
    const response = await fetch('http://localhost:3000/api/songsList');
    const songs = await response.json();

    const tracks = songs.map(song => ({
        title: song.title,
        album: song.album,
        last: new Date(song.lastListened).toLocaleString(),
        played: song.played
    }));

    res.render('information', { tracks: tracks });
};



module.exports = {

   login,
   register,
   information,
};