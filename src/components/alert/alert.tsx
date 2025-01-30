import { useChangeAlertMode } from "./hooks";
import { ChangeModeType } from "./model";
import { useReactContext } from "../../context";
import { useEffect, useState } from "react";

const Alert = () => {
  const { setAlert, alert } = useReactContext();
  const mode = useChangeAlertMode(alert?.type) as ChangeModeType;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!alert?.message) return;
    setIsVisible(true);

    if (!isHovered) {
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      const resetTimeout = setTimeout(() => {
        setAlert({ message: "", type: null });
      }, 8000);

      return () => {
        clearTimeout(hideTimeout);
        clearTimeout(resetTimeout);
      };
    }
  }, [alert?.message, setAlert, isHovered]);

  return (
    <div
      role="alert"
      className={`alert ${
        mode?.type || ""
      } absolute w-max top-2 right-2 cursor-pointer transform transition-all duration-500 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i>{mode?.icon}</i>
      <span className="text-white text-sm">{alert?.message}</span>
    </div>
  );
};

export default Alert;
