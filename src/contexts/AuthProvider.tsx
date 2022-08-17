// import { BASE_URL } from "@config/env";
// import { pageRoutes } from "@config/navigations";
// import { userSelector } from "@features/auth/auth.selector";
// import { useAppSelector } from "@hooks/app";
// import { getToken } from "@utils/cookies";
import React, { FC } from "react";

/**
 * Check the route is the authenticated route or not?
 * @param {string} pathName - The URL path name (e.g. /dashboard/users)
 */
// const isAuthenticatedRoute = (pathName: string): boolean => {
//   const routes = Object.values(pageRoutes);
//   const route = routes.find((item) => item.pathname === pathName);
//   return !!route?.isAuthenticated;
// };

/**
 * Create Auth Context
 */
const AuthContext = React.createContext({});

/**
 * Auth Provider
 */
export const AuthProvider: FC = ({ children }:any) => {
  // const user = useAppSelector(userSelector);

  const renderContent = () => {
    // const accessToken = getToken("access_token");
    // // Get path name & query params
    // const locationHref = window?.location?.href;
    // const pathName = window?.location?.pathname;
    // const params = new URLSearchParams(window?.location?.search);
    // const redirectURL = params.get("next");
    // // Is Login route
    // const isLoginRoute = pathName === pageRoutes.signIn.pathname;
    // // Handle the redirection on the login page / another page
    // if (isLoginRoute) {
    //   if (user && accessToken) {
    //     window.location.href =
    //       redirectURL || BASE_URL + pageRoutes.importantNews.pathname;
    //   }
    // } else if (!user) {
    //   if (isAuthenticatedRoute(pathName)) {
    //     router
    //       .push({
    //         pathname: pageRoutes.signIn.pathname,
    //         query: {
    //           next: locationHref,
    //         },
    //       })
    //       .catch(() => "");
    //     return "";
    //   }
    // }
    return children;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!true }}>
      {renderContent()}
    </AuthContext.Provider>
  );
};
