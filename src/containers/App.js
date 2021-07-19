import PanelHeroImage from "../components/background/PanelHeroImage";
import React from "react";
import MyAppBar from "../components/views/MyAppBar";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App(props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#424242",
          },
          secondary: {
            main: "#ebb434",
          },
        },
      }),
    [prefersDarkMode]
  );
  theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyAppBar />
        <PanelHeroImage />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
