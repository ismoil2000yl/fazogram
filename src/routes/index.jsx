import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Registration = lazy(() => import("pages/auth/registration"));
const Start = lazy(() => import("pages/start"));
const SignIn = lazy(()=> import("pages/auth/signIn"))
const Settings = lazy(()=> import("pages/settings"))
const Message = lazy(()=> import("pages/message"))

// import Settings from 'pages/settings'

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
  {
    path: "/settings",
    element: <Settings />,
    children: [{}],
  },
  {
    path: "/chats/:id/send-message",
    element: <Message />,
    children: [{}],
  },
];

export { authRoutes, privateRoutes };
