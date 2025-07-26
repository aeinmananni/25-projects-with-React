import { RouteObject, createBrowserRouter } from 'react-router';
import Home from '../home';
import {
  Accordion,
  BoxShadow,
  DarkMode,
  FilterProducts,
  Library,
  LormMaker,
  Navbar,
  PasswordInput,
  Reviews,
  ScrollTracker,
  SearchImages,
  SendEmail,
  Sidebar,
  TodoList,
  Slider,
  CheckPassword,
} from '../components';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/', element: <PasswordInput /> },
      { path: 'accordion', element: <Accordion /> },
      { path: 'lorm-maker', element: <LormMaker /> },
      { path: 'navbar', element: <Navbar /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'scroll-tracker', element: <ScrollTracker /> },
      { path: 'search-images', element: <SearchImages /> },
      { path: 'send-email', element: <SendEmail /> },
      { path: 'dark-mode', element: <DarkMode /> },
      { path: 'sidebar', element: <Sidebar /> },
      { path: 'library', element: <Library /> },
      { path: 'box-shadow', element: <BoxShadow /> },
      { path: 'filter-products', element: <FilterProducts /> },
      { path: 'todo-list', element: <TodoList /> },
      { path: 'slider', element: <Slider /> },
      { path: 'checkPassword', element: <CheckPassword /> },
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
