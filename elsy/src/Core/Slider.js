import React, { Component } from 'react';
//import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import RCSlider from 'rc-slider';



class Slider extends Component {
    render() {
        return (
            <div className="conteneur">
            <RCSlider   max={this.props.max}
                        min={this.props.min}
                        onChange={this.props.onChange}
                        value={this.props.value}>
                
             </RCSlider>

            </div>
        );
    }
}





export default Slider;

