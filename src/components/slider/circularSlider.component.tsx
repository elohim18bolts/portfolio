import React from "react";

import { IState } from "./sliderState.interface";
import { map } from "../../utils/map";

interface IProps {
  width: number;
  height: number;
  from: number;
  to: number;
}

export class CircularSlider extends React.Component {
  state: IState;
  props: IProps;
  sliderStyle: any;
  offset: number;
  constructor(props: IProps) {
    super(props);
    this.props = props;
    this.offset = 480;
    this.state = {
      sliderMinValue: props.from,
      sliderMaxValue: props.to,
      sliderValue: 0,
      offset: this.offset,
    };
    this.sliderStyle = {
      strokeDasharray: 480,
      //strokeDashoffset: this.state.offset,
    };
  }
  handleInputEvent = (e: React.FormEvent<HTMLInputElement>) => {
    const value = map(
      e.currentTarget.valueAsNumber,
      this.state.sliderMinValue,
      this.state.sliderMaxValue,
      0,
      this.offset
    );

    this.setState({
      offset: this.offset - value,
      sliderValue: e.currentTarget.valueAsNumber,
    });
  };

  ui = () => (
    <div className="circular-slider-wrapper">
      <svg
        height={this.props.height}
        width={this.props.width}
        style={{ border: "1px black solid" }}
      >
        <circle
          id="inner-path"
          cx="100"
          cy="100"
          r="68"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
        <circle
          id="outer-path"
          cx="100"
          cy="100"
          r="82"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
        <circle
          id="slider"
          cx="100"
          cy="100"
          r="75"
          stroke="lightblue"
          strokeWidth="10"
          fill="none"
          strokeDashoffset={this.state.offset}
          style={this.sliderStyle}
        />
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dominantBaseline="middle"
        ></text>
      </svg>

      <input
        id="sliderController"
        type="range"
        min={this.state.sliderMinValue}
        max={this.state.sliderMaxValue}
        value={this.state.sliderValue}
        onInput={this.handleInputEvent}
      />
    </div>
  );

  render() {
    return this.ui();
  }
}
