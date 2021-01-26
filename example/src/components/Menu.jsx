import React from 'react'

import './menu.css';

import { Link } from 'react-router-dom'

const Menu = () => (
  <aside className="Menu">
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Dashboard</Link>
        </li> */}
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu
