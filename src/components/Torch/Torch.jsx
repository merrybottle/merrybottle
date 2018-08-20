// @flow
import React, { PureComponent } from 'react';
import { TorchStyled } from './styled/Torch';

type State = {
  circleX: number,
  circleY: number
};

class Torch extends PureComponent<State> {
  state = {
    circleX: 300,
    circleY: 300,
    radiusX: 75,
    radiusY: 75,
    svgHeight: null,
    svgWidth: null
  };

  svgRef: ?SVGElement;

  componentDidMount() {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    global.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    global.removeEventListener('resize', this.handleResize);
  }

  handleMouseMove = (e) => {
    const {
      svgHeight,
      svgWidth
    } = this.state;

    this.setState({
      circleX: e.clientX / svgWidth * 600,
      circleY: e.clientY / svgHeight * 600,
      radiusX: (600 / svgWidth) * 75,
      radiusY: (600 / svgHeight) * 75
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
      circleY,
      radiusX,
      radiusY
    } = this.state;

    return (
      <TorchStyled
        height="100%"
        width="100%"
        viewBox="0 0 600 600"
        preserveAspectRatio="none"
        innerRef={(svg) => { this.svgRef = svg; }}
      >
        <path
          d={`M 0,0 600,0 600,600 0,600 0,0 M ${circleX},${circleY} m -${radiusX},0 a ${radiusX},${radiusY} 0 1,0 ${radiusX * 2},0 a ${radiusX},${radiusY} 0 1,0 -${radiusX * 2},0 Z`}
          fill="black"
        />
      </TorchStyled>
    );
  }
}

export default Torch;
