import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '0',
      equation: '0',
      buttons: []
    }
    this.finalArr = [];
    this.findDec = this.findDec.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }
  //Final Decimal place in final number
  findDec(buttons) {
     this.finalArr = [];
     var arr1 = [];
 
     buttons.forEach(i => {
       if(i !== 'op') {
         arr1.push(i);   
       } else {
         this.finalArr.push(arr1);
         arr1 = [];
       }
     });
     this.finalArr.push(arr1);
  }
  
  handleClear() {
    this.setState({answer: '0', equation: '0', buttons: []});
  }
   
  handleNum(e) {  
    var value = e.target.innerHTML;
    //Replace 0 with Number, except for 0
    return (this.state.answer === '0' && value !== '0') ?
      this.setState({answer: value, equation: value, buttons: [...this.state.buttons, 'num'] }) :
    //No space between numbers
    (this.state.buttons.slice(-1)[0] === 'num' || this.state.buttons.slice(-1)[0] === 'dec') ?
      this.setState({answer: `${this.state.answer}${value}`, equation: `${this.state.answer}${value}`, buttons: [...this.state.buttons, 'num']}):
    //Add space between Numbers and Operators
    (this.state.buttons.slice(-1)[0] === 'op' && value !== '0') ?
      this.setState({answer: `${this.state.answer} ${value}`, equation: `${this.state.answer} ${value}`, buttons: [...this.state.buttons, 'num']}): null;
  }
 
  handleOp(e) {
    var value = e.target.className;
    var str = this.state.answer; 
    
    //Only add operators after numbers or equals
    return (this.state.buttons.slice(-1)[0] === 'num' || this.state.buttons.slice(-1)[0] === 'eq') ?
      this.setState({answer: `${this.state.answer} ${value}`, equation: `${this.state.answer} ${value}`, buttons: [...this.state.buttons, 'op']}):
    //IF last input was a decimal point
    (this.state.buttons.slice(-1)[0] === 'dec') ?
      this.setState({answer: `${this.state.answer}0 ${value}`, equation: `${this.state.answer}0 ${value}`, buttons: [...this.state.buttons, 'op']}):
    //ELSE IF the last input was a minus AND the input before was a number OR the last input was an OPERATOR && it wasn't minus
    ((str.slice(-1)[0] === '-' && this.state.buttons.slice(-2)[0] === 'num') || (this.state.buttons.slice(-1)[0] === 'op' && str.slice(-1)[0] !== '-')) ?
      this.setState({answer: `${str.slice(0, -1)} ${value}`, equation: `${str.slice(0, -1)} ${value}`}) : null;
  }
   
  handleMinus(e) {
    //IF last input was an operator && final input was NOT a minus OR last input was a number OR equals
    return ((this.state.buttons.slice(-1)[0] === 'op' && this.state.answer.slice(-1)[0] !== '-') || this.state.buttons.slice(-1)[0] === 'num' || this.state.buttons.slice(-1)[0] === 'eq') ?
      this.setState({answer: `${this.state.answer} -`, equation: `${this.state.answer} -`, buttons: [...this.state.buttons, 'op']}) : null;
  }
  
  handleDec(e) {
    this.findDec(this.state.buttons);
    //IF no buttons pressed   OR  IF button.slice === 'num' && !finalArr[finalArr.length-1].includes('dec')
    return (this.state.answer === '0' || (this.state.buttons.slice(-1)[0] === 'num' && !this.finalArr[this.finalArr.length-1].includes('dec'))) ?
      this.setState({answer: `${this.state.answer}.`, equation: `${this.state.answer}.`, buttons: [...this.state.buttons, 'dec']}): 
    //If the final element is an operator, add a 0.
    (this.state.buttons.slice(-1)[0] === 'op') ?
       this.setState({answer: `${this.state.answer} 0.`, equation: `${this.state.answer} 0.`, buttons: [...this.state.buttons, 'dec']}) : null;
  }
 
  handleEquals() {
    var answer = eval(this.state.equation);
    return (this.state.buttons.slice(-1)[0] === 'num') ? this.setState({ answer: answer, buttons: [...this.state.buttons, 'eq']}) : null;
  }
 
  render() {
    return (
      <div id="calculator">
       <p id="equation">{this.state.equation}</p>
       <p id="display">{this.state.answer}</p>
       <button id="clear" onClick={this.handleClear}>AC</button>
       <button id="divide" class="/" onClick={this.handleOp}>/</button>
       <button id="multiply" class="*" onClick={this.handleOp}>x</button>
 
       <button id="seven" onClick={this.handleNum}>7</button>
       <button id="eight" onClick={this.handleNum}>8</button>
       <button id="nine" onClick={this.handleNum}>9</button>
       <button id="subtract" class="-" onClick={this.handleMinus}>-</button>
 
       <button id="four" onClick={this.handleNum}>4</button>
       <button id="five" onClick={this.handleNum}>5</button>
       <button id="six" onClick={this.handleNum}>6</button>
       <button id="add" class="+" onClick={this.handleOp}>+</button>
 
       <button id="one" onClick={this.handleNum}>1</button>
       <button id="two" onClick={this.handleNum}>2</button>
       <button id="three" onClick={this.handleNum}>3</button>
       <button id="decimal" class="." onClick={this.handleDec}>.</button>
 
       <button id="zero" onClick={this.handleNum}>0</button>
       <button id="equals" onClick={this.handleEquals}>=</button>
      </div>
    )
  }
};

export default App;
