import DiscountActionTypes from './discount.types';

const INITIAL_STATE = {
  discountStart: 0,
  discountEnd: 30
}

const DiscountReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case DiscountActionTypes.ANIMATE_DISCOUNT:
      return {
        ...state,
        discountStart: state.discountStart + 1 
      }
    default:
      return state
  }

};

export default DiscountReducer;