const exjwt = require('express-jwt');

// Init the express-jwt middleware
const isAuthenticated = exjwt({
    secret: 'JWT'
});

module.exports = isAuthenticated;