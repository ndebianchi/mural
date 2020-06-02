const bcrypt = require('bcrypt');

let senha = bcrypt.hashSync('teste', 10)

console.log(senha); 

