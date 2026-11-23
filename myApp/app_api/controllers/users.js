const mongoose = require('mongoose');
require('../../app_server/models/users.js');  
const User = mongoose.model('User')


const login = async(req,res) =>{

  const {email,password} = req.body;

  if(!email || !password){
    return res.status(400).json({message:"All fields must be enterd"})
  }
  try{
   const result = await User.authenticate()(email, password);
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    if(user.password !== password){
      return res.status(401).json({message: "Invalid password"});
    }
    
    res.status(200).json({message: "Login successful"});


  } catch (error) {
    return res.status(500).json({message: "Internal server error"});
  }

};

const register = (req, res) => {
  const { forename, surname, email, password } = req.body;

  if (!forename || !surname || !email || !password) {
    return res.status(400).json({ message: "All fields must be entered to Register User" });
  }

User.register(new User({ forename: forename, surename: surname, email: email }), password)

  .then(user => {
    res.status(201).json({ message: "User registered" });
  })
  .catch(err => {
    res.status(400).json({ message: "Error registering user" });
  });
};

module.exports = { login,register};