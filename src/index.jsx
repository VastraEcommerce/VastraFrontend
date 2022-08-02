import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import React from "react";
import theme from "./app/muiTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
