import { RouteObject, createBrowserRouter } from "react-router";
import PasswordInput from "../components/password-input";
import Accordion from "../components/accordion";
import LormMaker from "../components/lorm-maker";
import Home from "../home";
import { Reviews } from "../components/reviews";
import { ScrollTracker } from "../components/scroll-tracker";
import { SearchImages } from "../components/search-images";
import Navbar from "../components/navbar";
import { SendEmail } from "../components/send-email";
import { DarkMode } from "../components/dark-mode";
import { Sidebar } from "../components/sidebar";
import { Library } from "../components/library";
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
      { path: "scroll-tracker", element: <ScrollTracker /> },
      { path: "search-images", element: <SearchImages /> },
      { path: "send-email", element: <SendEmail /> },
      { path: "dark-mode", element: <DarkMode /> },
      { path: "sidebar", element: <Sidebar /> },
      { path: "library", element: <Library /> },
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
