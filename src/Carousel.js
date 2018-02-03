import React from 'react';
import CarouselItem from './CarouselItem';
import CarouselMarkers from './CarouselMarkers';
import CarouselPage from './CarouselPage';

import './Carousel.css';

export default class Carousel extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      images: props.images,
      isTransitioning: false,
      previousItem: null,
      currentItem: 0,
    };
    
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickGoTo = this.handleClickGoTo.bind(this);
  }
  
  componentDidMount() {
  }

  setNextItem(next) {
    this.setState(state => ({
      isTransitioning: true,
      currentItem: next,
      previousItem: state.currentItem,
    }));
  }
    
  handleClickPrev(e) {
    e.preventDefault();

    let next = this.state.currentItem - 1;
    if (next < 0)  next = this.props.images.length - 1;
    
    this.setNextItem(next);
  }
  
  handleClickNext(e) {
    e.preventDefault();

    let next = this.state.currentItem + 1;
    if (next === this.props.images.length)  next = 0;
    
    this.setNextItem(next);
  }

  handleClickGoTo(e) {
    e.preventDefault();
    const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    if (index === this.state.currentItem) return;

    this.setNextItem(index);
  }
  
  shouldLoad(index) {
    const current = this.state.currentItem;
    return (index >= (current - 1) && index <= (current +1));
  }
  
  renderNavigation() {
    return (
      <div>
        <div className="carousel-navigation">
          <button onClick={this.handleClickPrev}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
          <button onClick={this.handleClickNext}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>

        {
          this.props.markers
          ? <CarouselMarkers images={this.state.images} current={this.state.currentItem} onClick={this.handleClickGoTo} />
          :
        <CarouselPage images={this.state.images} current={this.state.currentItem} />
        }
      </div>
    );
  }
  
  render() {

    const trackerStyles = {
      transform: `translateX(-${this.state.currentItem * 100}%)`,
    };

    return (
      <section>

        <div className="carousel">
          <div className="carousel-track" style={trackerStyles} ref="track">
            {this.state.images.map((src, i) => <CarouselItem key={i} src={src} load={this.shouldLoad(i)} />)}
          </div>
          
          {this.state.images.length > 1 && this.renderNavigation()}
        </div>

      </section>
    );

  }
}

