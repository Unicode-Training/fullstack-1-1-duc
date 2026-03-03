import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactRef from "./ReactRef.jsx";
import RefEx from "./RefEx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ReactRef /> */}
    <RefEx />
  </StrictMode>,
);
