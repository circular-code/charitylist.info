import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Footer, Grid, Search } from './components/index.js';
import './index.css';

//TODO: Google seo optimierungen
//TODO: impressum etc.
//TODO: Dark Mode
//TODO: "DONE" Button after category selection
//TODO: selected:true für qs übergebene regions
//TODO: Daten direkt nach Value Änderung reloaden wenn Suchergebnisse offen?

ReactDOM.render(
    <React.StrictMode>
     <div className="App">
        <Header/>
        <main id="wrapper">
            <Search/>
            <Grid/>
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
    </div>
    </React.StrictMode>,
    document.getElementById('root')
);
