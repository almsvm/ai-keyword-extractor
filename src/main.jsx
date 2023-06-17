import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// importing `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrapping App componentwith `ChakraProvider` */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
