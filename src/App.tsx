import { createContext, Suspense, useEffect, useState } from "react";
import MasterLayout from "./layout/MasterLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "pages/Dashboard";
import NotFoundPage from "pages/NotFoundPage";

import {
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import themeOverride from "./theme/theme";
import { DASHBOARD_ROUTES } from "./routes/Routes";

export const themeContext = createContext("green");

function App() {
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor") ?? "green"
  );
  const [shapes, setShapes] = useState(
    localStorage.getItem("shape") ?? "Solid Color"
  );
  // Sync theme color with local storage
  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
  }, [themeColor]);

  // Sync theme color with local storage
  useEffect(() => {
    localStorage.setItem("shape", shapes);
  }, [shapes]);

  // Modify the theme based on selected themeColor
  const themeAsperSelected = {
    ...themeOverride,
    colors: {
      theme: themeOverride.colors[themeColor],
    },
  };

  const theme = mergeMantineTheme(DEFAULT_THEME, themeAsperSelected);

  return (
    <themeContext.Provider
      value={{ themeColor, setThemeColor, shapes, setShapes }}
    >
      <ToastContainer autoClose={3000} pauseOnHover theme="dark" />
      <MantineProvider
        theme={theme}
        key="portfolio"
        classNamesPrefix="portfolio"
        withCssVariables
        defaultColorScheme="dark"
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={""}>
                  <MasterLayout />
                </Suspense>
              }
            >
              {DASHBOARD_ROUTES.map((routeItem) => (
                <Route
                  key={routeItem.key}
                  path={routeItem.path}
                  element={routeItem.component}
                />
              ))}
            </Route>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <Suspense fallback={""}>
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </MantineProvider>
    </themeContext.Provider>
  );
}

export default App;
