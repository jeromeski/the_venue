import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Zoom from 'react-reveal/Zoom';

const PricingItem = ({item}) => {
  const {price, desc, position, link, delay} = item;
  return (
    <Zoom delay={delay}>
      <div className='pricing_item'>
      <div className='pricing_inner_wrapper'>
        <div className='pricing_title'>
        <span>${price}</span>
        <span>{position}</span>
        </div>
        <div className='pricing_description'>
          {desc}
        </div>
        <div className='pricing_buttons'>
          <CustomButton 
            text='Purchase'
            bck='#ffa800'
            color='fffff'
            link={link}
          />
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default PricingItem;