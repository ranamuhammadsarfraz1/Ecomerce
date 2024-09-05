import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isloggedIn = false;
  return <>{isloggedIn ? props.children : <Navigate to={"/userauth"} />}</>;
};

export default PrivateRoute;
