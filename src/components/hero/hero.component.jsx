import React from 'react';
import Carrousel from '../carrousel/carrousel.component';

const Hero = () => {
  return (
    <div style={{
      position: 'relative'
    }}>
      
      <Carrousel />

      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
    </div>
  );
};

export default Hero;