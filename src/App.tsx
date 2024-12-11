// import PasswordInput from "./components/password-input";
import { ProviderContext } from "./context";
import { RouterProvider } from "react-router";
import router from "./router/router";
const App = () => {
  return (
    <ProviderContext>
      <RouterProvider router={router} />
    </ProviderContext>
  );
};

export default App;
