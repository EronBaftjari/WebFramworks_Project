const login = (req,res) =>{

  const {email,password} = req.body;

  if(!email || !password){
    return res.status(400).json({message:"All fields must be enterd"})
  }
res.status(201).json ({message: "Succesfully registerd"});
}

const register = (req,res)=>{

  const {forename,surname,email,password}= req.body;

  if(!forename || !surname || !email || !password){

    return res.status(400).json({"message": "All fields must be enterd to Register User"})
  }
  res.status(201).json({message: "Succesfully registerd a member"});
}

module.exports = { login,register};