import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/stores";
import { Provider } from "react-redux";

import "./i18n.js";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>loading~~~</div>}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);
