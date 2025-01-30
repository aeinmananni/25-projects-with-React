import { AlertType, ChangeModeType } from "./model";
import SuccessIcon from "../../icons/success-icon";
import WarningIcon from "../../icons/warning-icon";
import ErrorIcon from "../../icons/error-icon";

export const useChangeAlertMode = (
  alert: AlertType | null
): ChangeModeType | null => {
  switch (alert) {
    case "success":
      return {
        type: "alert-success",
        icon: <SuccessIcon />,
      };
    case "warning":
      return {
        type: "alert-warning",
        icon: <WarningIcon />,
      };
    case "error":
      return {
        type: "alert-error",
        icon: <ErrorIcon />,
      };
    default:
      return null;
  }
};
