const passport = require('passport');
const UsersController = require('../controllers/userController');
const helper = require('../helpers/authHelper');

module.exports = {
  initRouter: function route(app) {
    const { validateBody, schemas } = helper;

    app.route('/signup')
      .post(UsersController.signup);

    app.route('/signin')
      .post(validateBody(schemas.authSchema), passport.authenticate('local', { session: false }), UsersController.signin);

    app.route('/secret')
      .get(passport.authenticate('jwt', { session: false }), UsersController.secret);
  },
};