import React from 'react';
import './AutoSlide.css';

class AutoSlide extends React.Component {
  constructor(props) {
    super(props);
    const idxStart = 0;
    this.state = {
      index: idxStart,
      next: this.getNextIndex(idxStart),
      move: false,
    };
  }
  
  getNextIndex(idx) {
    if (idx >= this.props.pics.length - 1) {
      return 0;
    }
    return idx + 1;
  }

  setIndexes(idx) {
    this.setState({
      index: idx,
      next: this.getNextIndex(idx)
    });
  }
  componentDidMount() {
    
    setInterval(() => {
      // on
      this.setState({
        move: true
      });
      // off
      setTimeout(() => {
        this.setState({
          move: false
        });
        this.setIndexes(this.getNextIndex(this.state.index));
      }, 500); // same delay as in the css transition here
     
    }, 2000);
  }
  render() {
    const move = this.state.move ? 'move' : '';
    if (this.state.move) {
      
    }
    return (
      <div className="mask">
        <div className="pic-wrapper">
          <div className={`current pic ${move}`}>
            {this.state.index}
            <img src={this.props.pics[this.state.index]} alt="" />
          </div>
          <div className={`next pic ${move}`}>
            {this.state.next}
            <img src={this.props.pics[this.state.next]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default AutoSlide;

