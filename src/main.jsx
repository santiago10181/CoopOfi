// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// StrictMode solo aporta verificaciones adicionales durante desarrollo.
// No modifica el comportamiento final de producción.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);