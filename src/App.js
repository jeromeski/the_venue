import React, { Component } from 'react';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import './resources/styles.css';
import Venue from './components/venue/venue.component';
import Hightlight from './components/highlights/highlights.component';
import Pricing from './components/pricing/pricing.component';
import Location from './components/location/location.component';
import Footer from './components/footer/footer.component';
import { Element } from 'react-scroll'

class App extends Component {
  render() {
    return (
      <div className='App' style={{ height: '1500px'}}>
        <Header />
        <Element name='event'>
          <Hero />
        </Element>
        <Element name='venue'>
          <Venue />
        </Element>
        <Element name='highlight'>
          <Hightlight />
        </Element>
        <Element name='pricing'>
          <Pricing />
        </Element>
        <Element name='location'>
          <Location />
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;