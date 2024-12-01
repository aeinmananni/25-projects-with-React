import PasswordInput from "./components/password-input";
import { ProviderContext } from "./context";
const App = () => {
  return (
    <ProviderContext>
      <PasswordInput />
    </ProviderContext>
  );
};

export default App;
