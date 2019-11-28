import React, { Component } from 'react';
import PricingItem from '../pricing-item/pricing-item.component';


class Pricing extends Component {

  state={
    pricing:
      [
        {
          price: 100,
          position: 'Balcony',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, facilis impedit repellendus quis at blanditiis quos culpa delectus vero asperiores eligendi neque quidem tempore voluptas.',
          id: 1,
          link: 'http://google.com',
          delay: 500
        },
        {
          price: 150,
          position: 'Medium',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, facilis impedit repellendus quis at blanditiis quos culpa delectus vero asperiores eligendi neque quidem tempore voluptas.',
          id: 2,
          link: 'http://google.com',
          delay: 0
        },
        {
          price: 250,
          position: 'Star',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, facilis impedit repellendus quis at blanditiis quos culpa delectus vero asperiores eligendi neque quidem tempore voluptas.',
          id: 3,
          link: 'http://google.com',
          delay: 500
        }
      ]
  }

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>
            {this.state.pricing.map((item, idx) => (
              <PricingItem key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;