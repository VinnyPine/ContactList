import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/Global.ts";
import { FontStyles } from "./styles/Font.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <FontStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
