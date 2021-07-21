import React, { useRef }  from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import Tech from "../components/tech/Tech";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App(props) {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const techRef = useRef(null);
  const portfolioRef = useRef(null);

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

  const references = { aboutRef, techRef, portfolioRef }
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header references={references}/>
        <About reference={aboutRef}/>
        <Resume reference={resumeRef}/>
        <Tech reference={techRef}/>
        <Portfolio reference={portfolioRef}/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
