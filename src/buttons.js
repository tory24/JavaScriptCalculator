import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button id="clear" onClick={this.props.handleClear}>AC</button>
                <button id="divide" class="/" onClick={this.props.handleOp}>/</button>
                <button id="multiply" class="*" onClick={this.props.handleOp}>x</button>
            
                <button id="seven" onClick={this.props.handleNum}>7</button>
                <button id="eight" onClick={this.props.handleNum}>8</button>
                <button id="nine" onClick={this.props.handleNum}>9</button>
                <button id="subtract" class="-" onClick={this.props.handleMinus}>-</button>
            
                <button id="four" onClick={this.props.handleNum}>4</button>
                <button id="five" onClick={this.props.handleNum}>5</button>
                <button id="six" onClick={this.props.handleNum}>6</button>
                <button id="add" class="+" onClick={this.props.handleOp}>+</button>
            
                <button id="one" onClick={this.props.handleNum}>1</button>
                <button id="two" onClick={this.props.handleNum}>2</button>
                <button id="three" onClick={this.props.handleNum}>3</button>
                <button id="decimal" class="." onClick={this.props.handleDec}>.</button>
            
                <button id="zero" onClick={this.props.handleNum}>0</button>
                <button id="equals" onClick={this.props.handleEquals}>=</button>
            </div>
        );
    }
}

export default Buttons;