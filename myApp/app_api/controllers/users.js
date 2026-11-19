const login = (req,res) =>{

  const {email,password} = req.body;

  if(!email || !password){
    return res.status(400).json({message:"All fields must be enterd"})
  }
res.status(201).json ({message: "Succesfully registerd"});
}

module.exports = { login };