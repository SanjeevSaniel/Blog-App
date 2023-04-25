import React from "react";
import { createContext } from "react";

import "./App.css";
import BlogRoutes from "./components/utilities/Routers/BlogRoutes";

export const URLContext = createContext();
const URL = "https://good-blue-leopard-gown.cyclic.app";
// const URL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <URLContext.Provider value={URL}>
        <BlogRoutes />
      </URLContext.Provider>
    </div>
  );
}

export default App;
