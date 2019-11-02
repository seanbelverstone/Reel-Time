/* eslint-disable prettier/prettier */
import LocalStrategy from 'passport-local';
import models from '../models';

const localStrategy = new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  ((username, password, cb) => {
    models.User.findOne({
      where: {
        username,
      },
    }).then(
      (user) => {
        if (!user || !user.validatePassword(password)) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        return cb(null, user, { message: 'Logged In Successfully' });
      },
    ).catch((error) => {
      cb(error);
      throw error;
    });
  }),
);

export default localStrategy;
