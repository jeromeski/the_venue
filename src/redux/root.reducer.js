import { combineReducers } from 'redux';
import discountReducer from './discount/discount.reducer';
import pricingReducer from './pricing/pricing.reducer';

export default combineReducers({
  discount: discountReducer,
  price: pricingReducer
})