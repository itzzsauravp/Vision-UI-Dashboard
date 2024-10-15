import PropTypes from "prop-types";
import ErrorMessages from "../../Reusables/ErrorMessages";
import { Link } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("loggedIn");
  const error = {
    message: "Opps! Looks like you dont have access to this page",
    detail: "Seems like you are not logged In currently",
    solution: (
      <span>
        Kindly Navigate to either <Link to="/" className="text-2xl font-bold">Sign Up</Link> or{" "}
        <Link to="/signin" className="text-2xl font-bold">Sign In</Link>
      </span>
    ),
  };
  return loggedIn ? children : <ErrorMessages error={error} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

export default ProtectedRoute;
