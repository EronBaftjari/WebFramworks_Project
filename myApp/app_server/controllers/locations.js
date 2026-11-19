const axios = require('axios');

const login = async (req, res) => {

  if (req.method === 'GET') {
    return res.render('login');
  }

  try {
    await axios.post('http://localhost:3000/api/login', req.body);
    res.redirect('/information');

  } catch (err) {
    res.render('login', { message: err.response.data.message });
  }
};


const register = function(req,res){
  res.render('register.pug');


};

const information = async function(req, res){
    try{
    const response = await axios.get('http://localhost:3000/api/songsList');
    const songs = response.data; 

    const tracks = songs.map(song => ({
        title: song.title,
        album: song.album,
        last: new Date(song.lastListened).toLocaleString(),
        played: song.played
    }));

        res.render('information', { tracks: tracks });

    } catch (err) {

        res.status(500).render('error', { message: 'Could not load songs', error: {} });
    }
};


module.exports = {

   login,
   register,
   information,
};