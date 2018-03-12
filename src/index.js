import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDvt4yBkgwqyaIbryJ7s-7yLKVHb3M9TWQ';
// Create a new component this component should produce
// some html
const App = () =>{
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component  HTML
ReactDOM.render(<App />,document.querySelector('.container'));
