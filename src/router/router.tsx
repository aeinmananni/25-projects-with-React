import { RouteObject, createBrowserRouter } from "react-router";
import PasswordInput from "../components/password-input";
import Accordion from "../components/accordion";
import LormMaker from "../components/lorm-maker";
import Home from "../home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <PasswordInput /> },
      { path: "accordion", element: <Accordion /> },
      { path: "lorm-maker", element: <LormMaker /> },
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
