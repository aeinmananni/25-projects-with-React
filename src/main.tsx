import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col overflow-hidden h-screen w-full border  items-center p-4">
      <App />
    </div>
  </StrictMode>
);
