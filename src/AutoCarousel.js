import React from 'react';
import './AutoCarousel.css';

class Carousel extends React.Component { 
  state = {
    sliderStep: 1
  };
  
  componentDidMount () {
    // init carousel
    this.init()
  }
  
  componentWillUnmount () {
    // remove interval function on unmount
    clearInterval(this.carouselTimer)
  }
  
  render () {
    let images = this.props.images
    
    let carouselImages = images.map((image, index) => {
      let isActive = this.state.sliderStep === index + 1
      return (
        <CarouselItem
          key={index}
          bg={image}
          isActive={isActive} />
      )
    })
    
    let stepIndicators = []
    for (let i = 1; i <= images.length; i++) {
      let stepClass = i === this.state.sliderStep
        ? 'step-indicator step-indicator--active'
        : 'step-indicator'
      
      stepIndicators.push(
        <div
          id={i}
          onClick={this.onIndicatorClick}
          className={stepClass} />
      )
    }
    
    return (
      <div className='carousel-container'>
        { carouselImages }
        
        <div className='step-indicator-container'>
          { stepIndicators }
        </div>
        
      </div>
    )
  }
  
  // Initializes Carousel
  init = () => {
    // set max number of slides based on props length
    let maxSteps = this.props.images.length
    // init interval function
    let interval = this.props.interval || 5000 // default time interval is 1000ms
    this.carouselTimer = setInterval(() => {
      let step = this.state.sliderStep
      if (step < maxSteps) {
        step += 1
      } else {
        step = 1
      }
       
      // update compent state
      this.setState({
        sliderStep: step
      })
 
    }, interval)
  };
  
  onIndicatorClick = (event) => {
    this.setState({
      sliderStep: parseInt(event.target.id, 10)
    })
    // clear interval then start a new one
    clearInterval(this.carouselTimer)
    this.init()
  };
}

/*
 * Carousel Item Component
 */ 
class CarouselItem extends React.Component {
  render () {
    let itemClass = this.props.isActive ? 'carousel-item carousel-item--active' : 'carousel-item'
    return (
      <div
        className={itemClass}
        style={{ backgroundImage: 'url(\'' + this.props.bg +'\')' }}/>
    )
  }
}


/*
 * Root Application
 */
const carouselImages = [
  'http://lorempixel.com/800/360/food/',
  'http://lorempixel.com/800/360/sports/',
  'http://lorempixel.com/800/360/city/',
  'http://lorempixel.com/800/360/nature/'
]

class AutoCarousel extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <div className='app-header'>
          <h1>React Simple Carousel</h1> 
          <p>A simple carousel component using react.</p>
        </div>
        <div className='app-content'>
          <Carousel images={carouselImages} />
        </div>
      </div>
    )
  }
}

export default AutoCarousel;

