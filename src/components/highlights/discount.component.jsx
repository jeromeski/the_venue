import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import CustomButton from '../custom-button/custom-button.component';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  animateDiscount = () => {
    if( this.state.discountStart < this.state.discountEnd ) {
      this.setState((prevState) => ({discountStart: prevState.discountStart + 1}))
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.animateDiscount();
    }, 30);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade 
            onReveal={() => this.animateDiscount()}
          >
            <div className='discount_porcentage'>
              <span>{this.state.discountStart}%</span>
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

export default Discount;