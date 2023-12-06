import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./context/AuthContext";
import  DataContextProvider  from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
