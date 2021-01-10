import React from 'react';
import {Nav} from './index';

export default function Header() {
  return (
    <header>
        <h1 id="logo">charitylist.info</h1>
        <h2 id="subHeadline">
            <span>find <b>your</b> charity</span>
        </h2>
        <Nav/>
    </header>
  );
};