import React from 'react';
import your from './your.svg';

export default function Header() {
  const alertName = () => {
    alert('John Doe');
  };

  return (
    <header>
        <h1 id="logo">charitylist.info</h1>
        <h2 id="subHeadline">
            <span>find</span>
            <img src={your} alt="your"/>
            <span>charity</span>
        </h2>
        <nav>
            <ul>
                <li><a className="scroll" href="#searchResults">Search Results</a></li>
                <li><a className="scroll" href="#mission">Mission</a></li>
                <li><a className="scroll" href="#disclaimer">Disclaimer</a></li>
            </ul>
        </nav>
    </header>
  );
};