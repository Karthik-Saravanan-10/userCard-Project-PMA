import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataContainer } from "./components/store/dataContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataContainer>
      <App />
    </DataContainer>
  </StrictMode>
);
