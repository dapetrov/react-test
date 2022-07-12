import styles from './LeftSide.module.css';

import { Flogo } from '../../components/LeftSideComp/Logo/Logo';
import { Lmenu } from '../../components/LeftSideComp/l_menu/Lmenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LSideExit } from '../../components/LeftSideComp/LSideExit/LSideExit';
import { BurgerMenu } from '../../components/LeftSideComp/BurgerMenu/BurgerMenu';

export const LeftSide = () => {
  return (
    <div className={styles.LeftSideWrapper}>
      <div className={styles.LeftSide}>
        <NavLink to='/'>
          <Flogo />
        </NavLink>
        <Lmenu />
        <BurgerMenu />
        <LSideExit />
      </div>
    </div>
  );
};
