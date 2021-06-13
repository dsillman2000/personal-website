import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './Navbar';
import ContentFilters from './ContentFilters';
import CardFeed from './CardFeed'

ReactDOM.render(
  <React.StrictMode>
    <div className='gridarea'>
      <Navbar />
      <ContentFilters />
      <CardFeed />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
