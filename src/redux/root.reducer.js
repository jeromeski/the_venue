import { combineReducers } from 'redux';
import discountReducer from './discount/discount.reducer';

export default combineReducers({
  discount: discountReducer
})