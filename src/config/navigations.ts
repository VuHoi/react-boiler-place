export const pageRoutes = {
  signIn: {
    pathname: "/sign-in",
    isAuthenticated: false,
  },
  importantNews: {
    pathname: "/",
    isAuthenticated: false,
  },
  market: {
    pathname: "/market",
    isAuthenticated: false,
  },
  relatedToYou: {
    pathname: "/related-to-you",
    isAuthenticated: true,
  },
  report: {
    pathname: "/report/today",
    isAuthenticated: true,
  },
  polls: {
    pathname: "/polls",
    isAuthenticated: false,
  },
  account: {
    pathname: "/account",
    isAuthenticated: true,
  },
  alert: {
    pathname: "/alert",
    isAuthenticated: true,
  },
};
