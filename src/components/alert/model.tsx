export type AlertType = "warning" | "error" | "success";

export type ChangeModeType = {
  type: string;
  icon: React.ReactNode;
};

export type AlertStatesType = {
  message: string;
  type: AlertType | null;
};
