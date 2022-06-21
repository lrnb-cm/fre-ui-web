import { useApolloClient } from "@apollo/client";
import React, {
  Dispatch,
  ReactChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const protectedRoutes: { [key: string]: true } = {
  "/secure-route": true,
};

export type AuthGuardProps = {
  skipDefaultChecks: boolean;
  additionalChecks: (
    setUnauthorized: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => Promise<boolean>;
  children: ReactChildren;
};

const AuthGuard = ({
  additionalChecks,
  children,
  skipDefaultChecks,
}: AuthGuardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const apolloClient = useApolloClient();
  const idToken = localStorage.getItem("idToken");
  const { permissions } = useUserContext();
  const [unauthorized, setUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const protectedRoute = protectedRoutes[location.pathname];

    if (skipDefaultChecks) {
      additionalChecks(setUnauthorized, setLoading);
    } else if (!idToken && protectedRoute) {
      //Force user to login page if no idToken, and they are accessing a protected route
      //Send in current pathname to be directed to after login
      setUnauthorized(true);
      navigate("/login");
    } else if (!permissions && protectedRoute) {
      // If there's no user context then we can skip the rest of the logic and render the loading state.
      // This should only be true on the first render when user data is still being fetched
      setLoading(true);
    } else {
      // Ensure the user has permissions to be on this view by using the permissions in the user data
      if (
        !permissions[`viewRoute:${location.pathname.slice(1)}`] &&
        protectedRoute
      ) {
        setUnauthorized(true);
      } else if (additionalChecks) {
        //Run additional checks if they're defined
        additionalChecks(setUnauthorized, setLoading);
      } else setUnauthorized(false);
    }
  }, [location, apolloClient, permissions, setUnauthorized, idToken]);

  return (
    <>
      {unauthorized && <>Todo: really cool unauthorized page</>}
      {loading && <>Todo: really cool loading animation</>}
      {!unauthorized && !loading && children}
    </>
  );
};

export default AuthGuard;
