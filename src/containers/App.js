import React, { useRef, useMemo } from "react";
import PropTypes from "prop-types";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import Tech from "../components/tech/Tech";
// import MandalorianFont from "../static/fonts/mandalorelasertitle.ttf";

import { makeStyles } from "@material-ui/core/styles";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";


import Features from './Features';


const useStyles = makeStyles((theme) => ({
  root: {
    color: "lightblue",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 800,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

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

  const references = { homeRef, aboutRef, techRef, portfolioRef };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <MyAppBar references={references}/> */}
        <section id="back-to-top-anchor">
          <Header references={references} />
          {/* <Features /> */}
        </section>
        {/* <About reference={aboutRef} />
        <Resume reference={resumeRef} />
        <Tech reference={techRef} />
        <Portfolio reference={portfolioRef} /> */}
        <ScrollTop {...props}>
          <Fab color="blue" size="large" aria-label="Back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
