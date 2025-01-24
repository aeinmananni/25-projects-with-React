/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

type ContextType = {
  toggle: boolean;
  showMenu: boolean;
  setShowMenu: (value: boolean | ((c: boolean) => boolean)) => void;
  setToggle?: (value: boolean | ((c: boolean) => boolean)) => void;
  value: string;
  setValue: (value: string) => void;
};

const contexthanlder = createContext<ContextType | null>(null);

type ProviderContextType = {
  children: React.ReactNode;
};

const ProviderContext = ({ children }: ProviderContextType) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [value, setValue] = useState<string>("boy");

  return (
    <contexthanlder.Provider
      value={{ toggle, setToggle, showMenu, setShowMenu, value, setValue }}
    >
      {children}
    </contexthanlder.Provider>
  );
};

const useReactContext = () => {
  const context = useContext(contexthanlder);
  if (!context) {
    throw new Error("useContextHandler must be used within a ProviderContext");
  }

  return context;
};

export { ProviderContext, useReactContext };
