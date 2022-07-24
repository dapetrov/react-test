import './Mmenu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
/*export const Mmenu = () => {
  return (
    <div>
      <ul className='MmenuUl'>
        <li className='MmenuUlLi'>Пункт 1</li>
        <li className='MmenuUlLi'>Пункт 2</li>
        <li className='MmenuUlLi'>Пункт 3</li>
        <li className='MmenuUlLi'>
          <p className='PLmenu'>Пункт 4</p>
          <p className='PLmenu'>В две строки</p>
        </li>
      </ul>
    </div>
  );
};*/

/*return (
    <ul>
      {ParagraphOneString.map((paragraph, index) => (
        <li className='MmenuUlLi' key={index}>
          {paragraph}
        </li>
      ))}
      <li className='MmenuUlLi'>
        <p className='PLmenu'>Пункт 4</p>
        <p className='PLmenu'>В две строки</p>
      </li>
    </ul>
  );*/

export const Mmenu = () => {
  const ParagraphOneString = [
    ['Пункт 1'],
    ['Пункт 2'],
    ['Пункт 3'],
    ['Пункт 4', 'в две строки'],
    ['Профиль'],
  ];
  const Location = useLocation();
  const RenderParagraphOne = ParagraphOneString.map((paragraph, index) => (
    <li className='MmenuUlLi' key={index}>
      {'/page' + (index + 1) === Location.pathname ? (
        <NavLink to={`/page${index + 1}`}>
          <div className='Line'>
            {paragraph.map((str, idx) => (
              <p key={idx}>{str}</p>
            ))}
          </div>
        </NavLink>
      ) : (
        <NavLink to={`/page${index + 1}`}>
          {paragraph.map((str, idx) => (
            <p key={idx}>{str}</p>
          ))}
        </NavLink>
      )}
    </li>
  ));

  return <ul className='MmenuUL'>{RenderParagraphOne}</ul>;
};
