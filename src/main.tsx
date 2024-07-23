// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ProviderRouter } from "./providers/Provider.tsx";
import "./style/null.scss";
import { Provider } from "react-redux";
import { store } from "./providers/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ProviderRouter />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
