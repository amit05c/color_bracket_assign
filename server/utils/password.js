const bcrypt = require('bcryptjs');
const passGenerator=async(password)=>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync("B4c0/\/", salt);
    return hash
    
}
module.exports={
    passGenerator
}