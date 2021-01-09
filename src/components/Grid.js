import React from 'react';

export default function Grid() {
  const alertName = () => {
    alert('John Doe');
  };

  return (
    <section id="searchResults">
        <h3>Search Results</h3>
        <div id="charitiesGrid"></div>
    </section>
  );
};
