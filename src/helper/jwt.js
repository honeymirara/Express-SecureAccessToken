const jwt = require('jsonwebtoken');

function createToken(data) {
    const signature = 'akcksods';
    const payload = {
        id: data[0].id,
        email: data[0].email
    };
    const token = jwt.sign(payload, signature);
    return token;
};



module.exports = { createToken }