import React from 'react';

export default function NavBar() {
  return(
    <nav className='nav'>
      <ul className='row w-100'>
        <li className='col-3'>
          <a href='#about' className='link text-pink'>About</a>
        </li>
        <li className='col-3'>
          <a href='#projects' className='link text-pink'>Projects</a>
        </li>
        <li className='col-3'>
          <a href='#resume' className='link text-pink'>Resume</a>
        </li>
        <li className='col-3'>
          <a href='#contact' className='link text-pink'>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};