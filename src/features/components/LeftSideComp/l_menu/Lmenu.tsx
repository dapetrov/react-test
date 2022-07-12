import './Lmenu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
/*export const Lmenu = () => {
  return (
    <div>
      <ul className='noneMarker'>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
        <li>
          <p className='PLmenu'>Пункт 4</p>
          <p className='PLmenu'>В две строки</p>
        </li>
      </ul>
    </div>
  );
};*/
export const Lmenu = () => {
  const ParagraphOneString = [
    ['Пункт 1'],
    ['Пункт 2'],
    ['Пункт 3'],
    ['Пункт 4', 'в две строки'],
  ];
  const Location = useLocation();
  const RenderParagraphOne = ParagraphOneString.map((paragraph, index) => (
    <li className='LMenuLi' key={index}>
      {'/page' + (index + 1) === Location.pathname ? (
        <NavLink to={`/page${index + 1}`}>
          <div className='Pblue'>
            {paragraph.map((str, idx) => (
              <p className='PLmenu' key={idx}>
                {str}
              </p>
            ))}
          </div>
        </NavLink>
      ) : (
        <NavLink to={`/page${index + 1}`}>
          {paragraph.map((str, idx) => (
            <p className='PLmenu' key={idx}>
              {str}
            </p>
          ))}
        </NavLink>
      )}
    </li>
  ));

  return (
    <>
      <ul className='LMenuUl'>
        <li className='LMenuLi'>{RenderParagraphOne}</li>
      </ul>
    </>
  );
};
