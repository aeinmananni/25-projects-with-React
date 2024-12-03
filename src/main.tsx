import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <div className="flex flex-col overflow-hidden h-screen w-full border  items-center p-4">
      <App />
    </div>
  </BrowserRouter>
);
