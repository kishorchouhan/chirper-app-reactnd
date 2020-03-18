import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/chirper-app-reactnd/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/chirper-app-reactnd/new' activeClassName='active'>
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
