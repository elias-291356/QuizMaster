import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <BrowserRouter basename="/quizemaster"> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
