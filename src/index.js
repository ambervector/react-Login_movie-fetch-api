import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContext from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
      }}
    >
      <App />
    </AuthContext.Provider>
  </React.StrictMode>
);
