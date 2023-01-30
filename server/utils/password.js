const bcrypt = require('bcryptjs');
const passGenerator=async(password)=>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash
    
}

const checkPassword= async(password,hash)=>{
    let check= bcrypt.compareSync(password, hash); 
    // console.log(check)
    return check
}
module.exports={
    passGenerator,
    checkPassword
}