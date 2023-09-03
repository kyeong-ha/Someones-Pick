import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "@styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.querySelector('body') as HTMLElement
);
root.render(
// <React.StrictMode>
  <BrowserRouter>
    <GlobalStyle />
      <App />
  </BrowserRouter>
// </React.StrictMode>
);
