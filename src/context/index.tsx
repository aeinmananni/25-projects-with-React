/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { AlertStatesType } from "../components/alert";

type ContextType = {
  toggle: boolean;
  showMenu: boolean;
  setShowMenu: (value: boolean | ((c: boolean) => boolean)) => void;
  setToggle?: (value: boolean | ((c: boolean) => boolean)) => void;
  value: string;
  setValue: (value: string) => void;
  alert: AlertStatesType;
  setAlert: (value: AlertStatesType) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean | ((v: boolean) => boolean)) => void;
};

const contexthanlder = createContext<ContextType | null>(null);

type ProviderContextType = {
  children: React.ReactNode;
};

const ProviderContext = ({ children }: ProviderContextType) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [value, setValue] = useState<string>("boy");
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saveMode = localStorage.getItem("darkMode");

    return saveMode ? JSON.parse(saveMode) : false;
  });
  const [alert, setAlert] = useState<AlertStatesType>({
    message: "",
    type: "success",
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <contexthanlder.Provider
      value={{
        toggle,
        setToggle,
        showMenu,
        setShowMenu,
        value,
        setValue,
        alert,
        setAlert,
        darkMode,
        setDarkMode,
      }}
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
