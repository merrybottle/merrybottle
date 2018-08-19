// @flow
import React, { PureComponent } from 'react';
import { TorchStyled } from './styled/Torch';

type State = {
  circleX: number,
  circleY: number
};

class Torch extends PureComponent<State> {
  state = {
    circleX: 400,
    circleY: 300,
    svgHeight: null,
    svgWidth: null
  };

  svgRef: ?SVGElement;

  componentDidMount() {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    document.body.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    document.body.removeEventListener('resize', this.handleResize);
  }

  handleMouseMove = (e) => {
    const {
      svgHeight,
      svgWidth
    } = this.state;

    this.setState({
      circleX: e.clientX / svgWidth * 800,
      circleY: e.clientY / svgHeight * 600
    });
  }

  handleResize = () => {
    this.setState({
      svgHeight: this.svgRef.clientHeight,
      svgWidth: this.svgRef.clientWidth
    });
  }

  render() {
    const {
      circleX,
      circleY
    } = this.state;

    return (
      <TorchStyled>
        <svg height="100%" width="100%" viewBox="0 0 800 600" ref={(svg) => { this.svgRef = svg; }}>
          <path
            d={`M 0,0 800,0 800,600 0,600 0,0 M ${circleX},${circleY} m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0 Z`}
            fill="black"
          />
        </svg>
      </TorchStyled>
    );
  }
}

export default Torch;
