import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Registration = lazy(() => import("pages/auth/registration"));
const Start = lazy(() => import("pages/start"));
const SignIn = lazy(()=> import("pages/auth/signIn"))

const authRoutes = [
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/auth/registration",
    element: <Registration />,
  },
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
];

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [{}],
  },
];

export { authRoutes, privateRoutes };
