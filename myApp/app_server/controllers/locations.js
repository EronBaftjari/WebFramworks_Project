const axios = require('axios');

const apiOptions = {
  server: 'http://localhost:3000'
};

const login = (req, res) => {
  const messages = req.session.messages || [];
  req.session.messages = [];
  res.render('login', { message: messages[0] });
};


// AFTER
const register = async (req, res) => {

  if (req.method === 'GET') {
    return res.render('register');
  }

  try {

    await axios.post(apiOptions.server + '/api/register', req.body);
    res.render('register', { message: 'User added' });

  } catch (err) {
    res.render('register', { message: err.response.data.message });

  }
};

const information = async function(req, res){
    try{
    const response = await axios.get(apiOptions.server + '/api/songsList');
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