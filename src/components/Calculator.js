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
                    <div className="button">AC</div>
                    <div className="button">+/-</div>
                    <div className="button">%</div>
                    <div className="button sign">&divide;</div>
                    <div className="button">7</div>
                    <div className="button">8</div>
                    <div className="button">9</div>
                    <div className="button sign">x</div>
                    <div className="button">4</div>
                    <div className="button">5</div>
                    <div className="button">6</div>
                    <div className="button sign">-</div>
                    <div className="button">1</div>
                    <div className="button">2</div>
                    <div className="button">3</div>
                    <div className="button sign">+</div>
                    <div className="button zero">0</div>
                    <div className="button">.</div>
                    <div className="button">=</div>
                </div>
            </div>
    );
  }
}

export default Calculator;
