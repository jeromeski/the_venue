import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import CustomButton from '../custom-button/custom-button.component';
import { connect}  from 'react-redux'
import {animateDiscountAction} from '../../redux/discount/discount.actions';

class Discount extends Component {

  animateDiscount = () => {
    const {discountStart, discountEnd, animateNumber} = this.props
    if( discountStart < discountEnd ) {
      animateNumber();
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.animateDiscount();
    }, 30);
  }

  render() {
    const {discountStart} = this.props
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade 
            onReveal={() => this.animateDiscount()}
          >
            <div className='discount_porcentage'>
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
            <h3>Purchase tickets before 20th JUNE</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, facilis impedit repellendus quis at blanditiis quos culpa delectus vero asperiores eligendi neque quidem tempore voluptas quasi earum nulla distinctio laboriosam adipisci, autem rerum vitae iste. Tempora unde doloremque nobis quasi?</p>
            <CustomButton 
              text='Purchase tickets'
              bck='#ffa800'
              color='#ffffff'
              link='http://google.com'
            />
          </div>
          </Slide>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = ({discount: {discountStart, discountEnd}}) => ({
  discountStart,
  discountEnd
})

const mapDispatchToProps = dispatch => ({
  animateNumber: () => dispatch(animateDiscountAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Discount);