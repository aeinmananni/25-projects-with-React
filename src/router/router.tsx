import { RouteObject, createBrowserRouter } from "react-router";
import PasswordInput from "../components/password-input";
import Accordion from "../components/accordion";
import LormMaker from "../components/lorm-maker";
import Home from "../home";
import Navbar from "../components/navbar";
import { Reviews } from "../components/reviews";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <PasswordInput /> },
      { path: "accordion", element: <Accordion /> },
      { path: "lorm-maker", element: <LormMaker /> },
      { path: "navbar", element: <Navbar /> },
      { path: "reviews", element: <Reviews /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  },
});

export default router;
