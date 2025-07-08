import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { TimerProvider } from "./contexts/TimerContext"; // NEW
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TimerProvider>
        <AppRoutes />
      </TimerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
