import userRoutes from "./users";
import dateRoutes from "./savedDates";
import authRoutes from "./auth";


export default function(app) {
    // userRoutes(app);
    // dateRoutes(app);
    authRoutes(app);
}