import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>
);

postMessage({ payload: "removeLoading" }, "*");
