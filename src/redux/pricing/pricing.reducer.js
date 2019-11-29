import PRICING_DATA from '../pricing/pricing-data';

const INITIAL_STATE = {
  pricing: PRICING_DATA
}

const pricingReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default pricingReducer;