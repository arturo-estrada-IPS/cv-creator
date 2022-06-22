/* eslint-disable no-restricted-globals */
import { Navigate } from "react-router-dom";
import { userIsAuthenticated } from "../../../modules/auth/services";

interface GuardedRouteProps {
  children: JSX.Element;
}

export function ProtectedRoute({ children }: GuardedRouteProps) {
  const auth = userIsAuthenticated();
  return auth ? children : <Navigate to="/auth" />;
}
