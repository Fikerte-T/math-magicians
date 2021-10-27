import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
            <div className="wrapper">
                <div className="result">{this.state.result}</div>
                <div className="buttons-container">
                    <button class="button">AC</button>
                    <button class="button">+/-</button>
                    <button class="button">%</button>
                    <button class="button sign">&divide;</button>
                    <button class="button">7</button>
                    <button class="button">8</button>
                    <button class="button">9</button>
                    <button class="button sign">x</button>
                    <button class="button">4</button>
                    <button class="button">5</button>
                    <button class="button">6</button>
                    <button class="button sign">-</button>
                    <button class="button">1</button>
                    <button class="button">2</button>
                    <button class="button">3</button>
                    <button class="button sign">+</button>
                    <button class="button zero">0</button>
                    <button class="button">.</button>
                    <button class="button">=</button>
                </div>
            </div>
    );
  }
}

export default Calculator;
