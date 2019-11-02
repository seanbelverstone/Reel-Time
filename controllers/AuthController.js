/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import passport from 'passport';
import jwt from 'jsonwebtoken';


module.exports = {
  validate: (request, response) => {
    passport.authenticate(
      'local',
      { session: false },
      // eslint-disable-next-line consistent-return
      (error, user, info) => {
        if (error || !user) {
          return response.status(403).json({
            message: 'Unable to Authorize',
            user,
            error,
            info,
          });
        }
        // eslint-disable-next-line no-shadow
        request.login(user, { session: false }, (error) => {
          if (error) {
            response.send(error);
          }
          const sanitizedUser = {
            id: user.id,
            username: user.username,
            email: user.email,
          };

          // eslint-disable-next-line max-len
          // generate a signed json web token with the contents of user object and return it in the response
          const token = jwt.sign(sanitizedUser, 'your_jwt_secret');
          response.json(
            {
              user: sanitizedUser,
              token,
            },
          );
        });
      },
    )(request, response);
  },
};
