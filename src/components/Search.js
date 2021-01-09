import React from 'react';
import { Button } from '@material-ui/core';
import { CountrySelect, CategorySelect } from './index';

export default function Search() {
  return (
    <section id="searchContainer">
        <article id="search">
            <div id="searchField">
                <div className="search-pair">
                    <div className="search-pair-description">
                        <CountrySelect/>
                    </div>
                    <div id="regionInput"></div>
                </div>
                <div className="search-pair">
                    <div className="search-pair-description">
                        <CategorySelect/>
                    </div>
                    <div id="categoryInput"></div>
                </div>
                <Button id="go" color="primary">GO</Button>
                <div className="search-pair">
                    <div className="search-pair-description">
                        <h4 className="search-pair-title">Choose a search term</h4>
                    </div>
                </div>
            </div>
        </article>
        <div id="hiddenContent">
            <div id="regionPopup"></div>
            <div id="categoryPopup"></div>
        </div>
    </section>
  );
};