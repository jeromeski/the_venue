import React from 'react';
import Carrousel from '../carrousel/carrousel.component';
import Countdown from '../countdown/countdown.component';

const Hero = () => {
  return (
    <div style={{
      position: 'relative'
      }}>
      
      <Carrousel />

      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>

      <Countdown/>

    </div>
  );
};

export default Hero;