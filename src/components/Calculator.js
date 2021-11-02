import React, { useState } from 'react';
import calculate from '../logic/calculate.js';

const Calculator = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });
  const updateStates = (newResult) => {
    setState((prevState) => ({
      ...prevState, total: newResult.total, next: newResult.next, operation: newResult.operation,
    }));
  };
  const { next, total, operation } = state;
  let result = '0';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }

  const clickHandler = (state, bName) => {
    const obj = calculate(state, bName);
    updateStates(obj);
  };
  return (
          <div className="calc-page">
              <h3 className="calc-title">Let's do some Math!</h3>
                <div className="wrapper">
                  <div className="result">{result || '0'}</div>
                  <div className="buttons-container">
                      <button name="AC" onClick = {(e) => clickHandler(state, e.target.name)} className="button">AC</button>
                      <button name="+/-" onClick = {(e) => clickHandler(state, e.target.name)} className="button">+/-</button>
                      <button name="%" onClick = {(e) => clickHandler(state, e.target.name)} className="button">%</button>
                      <button name="÷" onClick = {(e) => clickHandler(state, e.target.name)} className="button sign">÷</button>
                      <button name="7" onClick = {(e) => clickHandler(state, e.target.name)} className="button">7</button>
                      <button name="8" onClick = {(e) => clickHandler(state, e.target.name)} className="button">8</button>
                      <button name="9" onClick = {(e) => clickHandler(state, e.target.name)} className="button">9</button>
                      <button name="x" onClick = {(e) => clickHandler(state, e.target.name)} className="button sign">x</button>
                      <button name="4" onClick = {(e) => clickHandler(state, e.target.name)} className="button">4</button>
                      <button name="5" onClick = {(e) => clickHandler(state, e.target.name)} className="button">5</button>
                      <button name="6" onClick = {(e) => clickHandler(state, e.target.name)} className="button">6</button>
                      <button name="-" onClick = {(e) => clickHandler(state, e.target.name)} className="button sign">-</button>
                      <button name="1" onClick = {(e) => clickHandler(state, e.target.name)} className="button">1</button>
                      <button name="2" onClick = {(e) => clickHandler(state, e.target.name)} className="button">2</button>
                      <button name="3" onClick = {(e) => clickHandler(state, e.target.name)} className="button">3</button>
                      <button name="+" onClick = {(e) => clickHandler(state, e.target.name)} className="button sign">+</button>
                      <button name="0" onClick = {(e) => clickHandler(state, e.target.name)} className="button zero">0</button>
                      <button name="." onClick = {(e) => clickHandler(state, e.target.name)} className="button">.</button>
                      <button name="=" onClick = {(e) => clickHandler(state, e.target.name)} className="button">=</button>
                  </div>
                </div>
          </div>
  );
};

export default Calculator;
