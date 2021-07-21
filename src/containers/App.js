import React, { useRef, useMemo }  from "react";
import MyAppBar from "../components/toolbar/MyAppBar";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import Tech from "../components/tech/Tech";
// import MandalorianFont from "../static/fonts/mandalorelasertitle.ttf";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";


function App(props) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const techRef = useRef(null);
  const portfolioRef = useRef(null);

  // const mandalorianFont = {
  //   fontFamily: 'MandalorianFont',
  //   fontStyle: 'semi-bold',
  //   fontDisplay: 'swap',
  //   fontWeight: '400',
  //   src: `
  //     local('MandalorianFont'),
  //     local('MandalorianFont-SemiBold'),
  //     url(${MandalorianFont}) format('ttf')
  //   `,
  //   unicodeRange:
  //     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  //  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let theme = useMemo(
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

  const references = { homeRef, aboutRef, techRef, portfolioRef }
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {/* <MyAppBar references={references}/> */}
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
