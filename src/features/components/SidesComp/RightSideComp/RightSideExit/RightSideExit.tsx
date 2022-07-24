import React from 'react';
import './RightSideExit.css';
export const RightSideExit = () => {
  return (
    <div className='ExitBlocks'>
      <div className='ExitBlockMobile'>
        <img src='exit_mobile.svg' alt='Exit'></img>
      </div>
      <div className='ExitBlockPC'>
        <img src='Exit1.svg' alt='Exit'></img>
      </div>
    </div>
  );
};
