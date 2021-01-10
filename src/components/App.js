import React from 'react';
import { Header, Footer, Grid, Search } from './index.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ResultGrid from './ResultGrid.js';

export default function App() {

    // const theme = createMuiTheme({
    //   palette: {
    //     primary: blue,
    //   },
    // });

    const darkTheme = createMuiTheme({
        palette: {
            type: 'light',
        },
    });

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: 'light',
                    primary: {
                      // light: will be calculated from palette.primary.main,
                      main: '#fff',
                      // dark: will be calculated from palette.primary.main,
                      // contrastText: will be calculated to contrast with palette.primary.main
                    },
                    secondary: {
                      light: '#0066ff',
                      main: '#0044ff',
                      // dark: will be calculated from palette.secondary.main,
                      contrastText: '#ffcc00',
                    },
                    // Used by `getContrastText()` to maximize the contrast between
                    // the background and the text.
                    contrastThreshold: 3,
                    // Used by the functions below to shift a color's luminance by approximately
                    // two indexes within its tonal palette.
                    // E.g., shift from Red 500 to Red 300 or Red 700.
                    tonalOffset: 0.2,
                  },
            }),
        [prefersDarkMode],
    );

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
            <Header/>
            <main id="wrapper">
                <Search/>
                <ResultGrid/>
                <section id="mission">
                    <h3>Mission</h3>
                    <p>This page should serve as an entry point for your research and is meant to provide an unbiased overview over all charities.
                    We try to provide the results in an unbiased way, randomized, no logos, no corrupt rating system etc.
                    The content of the charity should be at the center of attention, not how much money they have or how big their influence is.</p>
                </section>
                <section id="disclaimer">
                    <h3>Disclaimer</h3>
                    <p>We cannot guarantee for the pages we link to. Surf at your own risk.</p>
                </section>
            </main>
            <Footer/>
            <script src="data.js"></script>
            </ThemeProvider>
        </div>
    );
};