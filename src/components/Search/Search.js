import React from 'react';
import { Button } from '@material-ui/core';

function Search() {
  const alertName = () => {
    alert('John Doe');
  };

  return (
    <section id="searchContainer">
        <article id="search">
            <div id="searchField">
                <div className="search-pair">
                    <div className="search-pair-description">
                        <h4 className="search-pair-title">1: Choose a region</h4>
                    </div>
                    <div id="regionInput"></div>
                </div>
                <div className="search-pair">
                    <div className="search-pair-description">
                        <h4 className="search-pair-title">2: Choose a category</h4>
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

export default Search;