import React, { Component } from 'react';
import Carousel from './Carousel';
import AutoSlide from './AutoSlide';

const pics = [
  'https://cdn.pixabay.com/photo/2017/06/19/07/12/water-lily-2418339__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/14/17/44/frog-2504507__480.jpg',
  'https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951__480.jpg',
];

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
        <AutoSlide pics={pics} /> 
      </div>
    );
  }
}

export default App;
