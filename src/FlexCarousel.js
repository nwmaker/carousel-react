import React from 'react';
import './FlexCarousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.prevItem = this.prevItem.bind(this);
    this.nextItem = this.nextItem.bind(this);

    this.state = {
      counter: 0,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    };
  }

  prevItem() {
    var prevItem = this.state.counter - 1 < 0 ? this.props.items.length - 1 : this.state.counter - 1;

    clearTimeout(this.state.timeout);
    this.setState({
      counter: prevItem,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    });
  }

  nextItem() {
    var nextItem = this.state.counter + 1 < this.props.items.length ? this.state.counter + 1 : 0;

    clearTimeout(this.state.timeout);
    this.setState({
      counter: nextItem,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    });
  }

  render() {
    const items = this.renderItems(this.props.items);

    return (
      <div className="carousel">
        <div className="carousel-prev" onClick={this.prevItem}></div>
        { items }
        <div className="carousel-next" onClick={this.nextItem}></div>
      </div>
    );
  }

  renderItems(items) {
    return items.map((item, index) => this.renderItem(item, (this.state.counter === index)));
  }

  renderItem(item, current) {
    return (
      <CarouselItem {...item} current={current}></CarouselItem>
    );
  }
}

class CarouselItem extends React.Component {
  render() {    
    return (
      <div className={"carousel-item " + (this.props.current ? 'current' : '')}>
        <img src={this.props.image} role="presentation" />
        <div className="carousel-heading">
          <h2>{this.props.title}</h2>
          <h3>{this.props.caption}</h3>
        </div>
      </div>
    );
  }
}

const carouselData = {
      timeoutTime: 5000,
      items: [
        {
          key: 1,
          image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325',
          title: 'Slide #1',
          caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          key: 2,
          image: 'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?fit=crop&fm=jpg&h=825&q=80&w=1325',
          title: 'Slide #2',
          caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          key: 3,
          image: 'https://images.unsplash.com/photo-1443926818681-717d074a57af?fit=crop&fm=jpg&h=825&q=80&w=1325',
          title: 'Slide #3',
          caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    };

export default () => (
  <div className="flex-carousel">
    <Carousel {...carouselData} />
  </div>
)
