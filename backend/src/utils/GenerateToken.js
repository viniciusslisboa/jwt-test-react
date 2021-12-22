const jwt = require('jsonwebtoken');

function generate(user) {
    const token = jwt.sign(user, "PRIVATEKEY", { expiresIn: 86400 })

    return token;
}



module.exports = generate;