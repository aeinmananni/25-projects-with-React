import { createContext, useState, useContext as useReactContext } from "react";

type ContextType = {
  toggle: boolean;
  setToggle?: (value: boolean | ((c: boolean) => boolean)) => void;
};

const contexthanlder = createContext<ContextType | null>(null);

type ProviderContextType = {
  children: React.ReactNode;
};

const ProviderContext = ({ children }: ProviderContextType) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <contexthanlder.Provider value={{ toggle, setToggle }}>
      {children}
    </contexthanlder.Provider>
  );
};

const UseContext = () => {
  const context = useReactContext(contexthanlder);
  if (!context) {
    throw new Error("useContextHandler must be used within a ProviderContext");
  }

  return context;
};

export { ProviderContext, UseContext };
