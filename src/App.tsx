// import PasswordInput from "./components/password-input";
import Accordion from "./components/accordion";
import { ProviderContext } from "./context";
const App = () => {
  return (
    <ProviderContext>
      {/* <PasswordInput /> */}
      <Accordion />
    </ProviderContext>
  );
};

export default App;
