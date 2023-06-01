import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from "./context/global";
import AppRoutes from "./routes/Approutes";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (localStorage.getItem("theme-color") as "light" | "dark") ?? "light"
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    localStorage.setItem("theme-color", nextColorScheme);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <BrowserRouter>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            loader: "dots",
          }}
        >
          <GlobalStateProvider>
            <AppRoutes />
          </GlobalStateProvider>
        </MantineProvider>
      </BrowserRouter>
    </ColorSchemeProvider>
  );
}

export default App;
