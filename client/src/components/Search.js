// this is the child of Radio
// this receives props from radio
import React, { useState, useEffect } from 'react';
import OneStation from './OneStation';

const Search = () => {
  const [input, setInput] = useState('');
  // POS named input, rerenders when setInput runs (input box changes) , default value empty string,
  return (
    <div className='Search'>
      <div>Tell me more about:</div>
      <input type='text' onChange={(event) => setInput(event.target.value)} />
      <div className='OneStation'>
        <OneStation />
      </div>
    </div>
  );
};
export default Search;

// I think this is complete
