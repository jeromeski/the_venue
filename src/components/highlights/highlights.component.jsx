import React from 'react';
import Description from './description.component';
import Discount from './discount.component';

const Highlights = () => {
  return (
    <div className='highlight_wrapper'>
      <Description />
      <Discount />
    </div>
  );
};

export default Highlights;