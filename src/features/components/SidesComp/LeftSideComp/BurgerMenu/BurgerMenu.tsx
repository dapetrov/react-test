import React from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';
export const BurgerMenu = () => {
  return (
    <nav className='nav'>
      <input className='nav__check' type='checkbox' id='showmenu' />
      <label className='nav__showmenu' htmlFor='showmenu'>
        &#9776;
      </label>
      <label className='nav__showmenu' htmlFor='showmenu'></label>
      <ul className='menu'>
        <NavLink to={`page1`}>
          <li className='menu__item'>Пункт1</li>
        </NavLink>
        <NavLink to={`page2`}>
          <li className='menu__item'>Пункт2</li>
        </NavLink>
        <NavLink to={`page3`}>
          <li className='menu__item'>Пункт3</li>
        </NavLink>
        <NavLink to={`page4`}>
          <li className='menu__item'>
            <p className='PLmenu'>Пункт 4</p>
            <p className='PLmenu'>В две строки</p>
          </li>
        </NavLink>
        <NavLink to={`page5`}>
          <li className='menu__item'>Профиль</li>
        </NavLink>
      </ul>
    </nav>
  );
};
