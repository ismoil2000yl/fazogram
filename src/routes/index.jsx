import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Registration = lazy(() => import("pages/auth/registration"));
const Start = lazy(() => import("pages/start"));
const SignIn = lazy(()=> import("pages/auth/signIn"))
const Settings = lazy(()=> import("pages/settings"))
const Message = lazy(()=> import("pages/message"))
const Requests = lazy(()=> import("pages/requests"))
const Media = lazy(()=> import("pages/media"))

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
    path: "/chats/:username/send-message",
    element: <Message />,
    children: [{}],
  },
  {
    path: "/requests",
    element: <Requests />,
    children: [{}],
  },
  {
    path: "/media/:username",
    element: <Media />,
    children: [{}],
  },
];

export { authRoutes, privateRoutes };
