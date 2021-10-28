import React from 'react';
import calculate from '../logic/calculate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
  }

  clickHandler(state, bName) {
    const resultObj = calculate(state, bName);
    this.setState({
      ...resultObj,
    });
  }

  render() {
    const { next, total, operation } = this.state;
    let result = '0';
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return (
            <div className="wrapper">
                <div className="result">{result || '0'}</div>
                <div className="buttons-container">
                    <button name="AC" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">AC</button>
                    <button name="+/-" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">+/-</button>
                    <button name="%" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">%</button>
                    <button name="÷" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button sign">÷</button>
                    <button name="7" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">7</button>
                    <button name="8" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">8</button>
                    <button name="9" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">9</button>
                    <button name="x" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button sign">x</button>
                    <button name="4" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">4</button>
                    <button name="5" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">5</button>
                    <button name="6" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">6</button>
                    <button name="-" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button sign">-</button>
                    <button name="1" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">1</button>
                    <button name="2" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">2</button>
                    <button name="3" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">3</button>
                    <button name="+" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button sign">+</button>
                    <button name="0" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button zero">0</button>
                    <button name="." onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">.</button>
                    <button name="=" onClick = {(e) => this.clickHandler(this.state, e.target.name)} className="button">=</button>
                </div>
            </div>
    );
  }
}

export default Calculator;
