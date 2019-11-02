/* eslint-disable prettier/prettier */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import passport from 'passport';
import userRoutes from './users';
import dateRoutes from './savedDates';
import authRoutes from './auth';


export default function (app) {
  authRoutes(app);
  userRoutes(app);
  // This app.use below ensures that we need authentication to happen from this point on.
  app.use(passport.authenticate('jwt', { session: false }));
  // Only then, can we start using the other routes
  dateRoutes(app);
}
