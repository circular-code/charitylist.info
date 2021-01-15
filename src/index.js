import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/index'
import './index.css';

//TODO: Google seo optimierungen
//TODO: impressum etc.
//TODO: Dark Mode verstehen/verbessern /siehe material-ui demp dark mode
//TODO: "DONE" Button after category selection
//TODO: selected:true für qs übergebene regions
//TODO: Daten direkt nach Value Änderung reloaden wenn Suchergebnisse offen?
// $.post('/plugin/SynergySearch/Search/search', {offset:0, limit: 100, columns:["Name","Internet", "Kategorie"]})

ReactDOM.render(
     <App/>,
    document.getElementById('root')
);
