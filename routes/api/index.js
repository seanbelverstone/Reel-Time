import userRoutes from "./users";
import dateRoutes from "./savedDates";
import authRoutes from "./auth";
import passport from "passport";


export default function(app) {
    authRoutes(app);
    userRoutes(app);
    // This app.use below ensures that we need authentication to happen from this point on.
    app.use(passport.authenticate("jwt", {session: false}));
    // Only then, can we start using the other routes
    dateRoutes(app);
    
}