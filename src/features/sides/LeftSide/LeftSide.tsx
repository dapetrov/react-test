import styles from './LeftSide.module.css';

import { Flogo } from '../../components/SidesComp/LeftSideComp/Logo/Logo';
import { Lmenu } from '../../components/SidesComp/LeftSideComp/l_menu/Lmenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LSideExit } from '../../components/SidesComp/LeftSideComp/LSideExit/LSideExit';
import { BurgerMenu } from '../../components/SidesComp/LeftSideComp/BurgerMenu/BurgerMenu';

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
