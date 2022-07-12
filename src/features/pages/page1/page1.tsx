import './page1.css';
import React from 'react';
import { MiddleSideHeader } from '../../components/Page1Comp/Page1Header/MiddleSideHeader';
import { MiddleSideBlocks } from '../../components/Page1Comp/Page1Blocks/MiddleSideBlocks';

export const Page1 = () => {
  return (
    <div className='page1'>
      <MiddleSideHeader />
      <MiddleSideBlocks />
    </div>
  );
};
