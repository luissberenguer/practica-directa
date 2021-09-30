const jwt = require('jsonwebtoken');

const secret = '@€~#pajf0';

const payload = {
    username: 'luis',
    email: 'lunablanca@gmail.com',
    password: 'luna1234'
}

function getToken() {
    const token = jwt.sign(payload, secret);
    console.log(token);
    return token;
}

module.exports = getToken;