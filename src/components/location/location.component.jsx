import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        title='Philippine Arena'
        src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d7715.0977714161945!2d120.95358254232893!3d14.794421231612976!3m2!1i1024!2i768!4f13.1!4m11!3e3!4m3!3m2!1d14.7946391!2d120.953604!4m5!1s0x3397ad90847baa5b%3A0xad841e7150c8aeea!2sPhilippine%20Arena%2C%20Ciudad%20de%20Victoria%2C%20Santa%20Maria%2C%20Bulacan!3m2!1d14.7938922!2d120.953604!5e0!3m2!1sen!2sph!4v1574942968334!5m2!1sen!2sph" 
          width="100%" 
          height="500px" 
          frameBorder="0" 
          style={{border:"0"}}
          alt='location'
          allowFullScreen></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;