import React, { Component } from 'react';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div>
        <Carousel images={[
          'http://lorempixel.com/600/400/city',
          'http://lorempixel.com/600/400/sports',
          'http://lorempixel.com/600/400/people',
          'http://lorempixel.com/600/400/nature',
          'http://lorempixel.com/600/400/abstract',
          'http://lorempixel.com/600/400/food',
          'http://lorempixel.com/600/400/fashion',
        ]} />
      </div>
    );
  }
}

export default App;
