import React from 'react';
import NavBar from '../Nav';

export default function Header() {
  return(
    <div className='row'>
      <div className='text-orange col-3'>
        <h1>Khyan Alvarez</h1>
      </div>
      <div className='col-11 w-75'>
        <NavBar />
      </div>
    </div>
  );
};