import React, { Component } from 'react';
import PricingItem from '../pricing-item/pricing-item.component';
import {connect} from 'react-redux'

class Pricing extends Component {

  render() {
    const {pricing} = this.props
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>
            {pricing.map((item) => (
              <PricingItem key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ({price: {pricing}}) => ({
  pricing
})

export default connect(mapDispatchToProps)(Pricing);