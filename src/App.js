import React, { Component } from 'react';
//import Carousel from './Carousel';
//import AutoSlide from './AutoSlide';
//import AutoCarousel from './AutoCarousel';
import FlexCarousel from './FlexCarousel';

/*
// this works
const pics = [
  'https://cdn.pixabay.com/photo/2017/06/19/07/12/water-lily-2418339__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/14/17/44/frog-2504507__480.jpg',
  'https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951__480.jpg',
];
<AutoSlide pics={pics} />
*/

class App extends Component {
  render() {
    return (
      <div>
        <FlexCarousel />
      </div>
    );
  }
}

export default App;
