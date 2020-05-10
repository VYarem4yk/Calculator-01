import React, { Component, Fragment } from "react";
import "./control.css";
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: "",
      number2: "",
      sign: null,
    };
  }
  handleButtonClick = (event) => {
    this.state.sign == null
      ? this.setState({
          number1: Number(`${this.state.number1}${+event.target.value}`),
        })
      : this.setState({
          number2: Number(`${this.state.number2}${+event.target.value}`),
        });
  };

  handleClickSign = (event) => {
    if (event.target.value == "sqrt") {
      this.setState({
        number1: Math.sqrt(this.state.number1).toFixed(3),
      });
    }
    this.setState({
      number2: "",
      sign: event.target.value,
    });
  };
  handleClearClick = () => {
    this.setState({
      sign: null,
      number1: "",
    });
  };

  handleBack = () => {
    let breakPoint1 = String(this.state.number1);
    let breakPoint2 = String(this.state.number2);
    if (this.state.number2 == "") {
      this.setState({
        number1: Number(breakPoint1.substr(0, breakPoint1.length - 1)),
      });
    } else {
      this.setState({
        number2: Number(breakPoint2.substr(0, breakPoint2.length - 1)),
      });
    }
  };

  handleDotClick = () => {
    let breakPoint1 = String(this.state.number1);
    let breakPoint2 = String(this.state.number2);
    if (this.state.number2 == "") {
      this.setState({
        number1: breakPoint1 + ".",
      });
    } else {
      this.setState({
        number2: breakPoint2 + ".",
      });
    }
  };

  handleResultClick = () => {
    this.setState({
      sign: null,
    });
    const { number1, number2 } = this.state;
    switch (this.state.sign) {
      case "+":
        this.setState({
          number1: number1 + number2,
          value: [],
        });
        break;
      case "-":
        this.setState({
          number1: number1 - number2,
        });
        break;
      case "x":
        this.setState({
          number1: number1 * number2,
        });
        break;
      case "/":
        this.setState({
          number1: (number1 / number2).toFixed(3),
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <Fragment>
        <tr>
          <h3>
            {this.state.sign == null
              ? this.state.number1 == ""
                ? 0
                : this.state.number1
              : this.state.number2 == ""
              ? this.state.number1
              : this.state.number2}
          </h3>
        </tr>
        <tr>
          <tr>
            <td>
              <button
                className="controlMain"
                value="sqrt"
                onClick={this.handleClickSign}
              >
                √
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="7"
                onClick={this.handleButtonClick}
              >
                7
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="8"
                onClick={this.handleButtonClick}
              >
                8
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="9"
                onClick={this.handleButtonClick}
              >
                9
              </button>
            </td>
            <td>
              <button
                className="controlMain"
                value="/"
                onClick={this.handleClickSign}
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.handleBack}>←</button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="4"
                onClick={this.handleButtonClick}
              >
                4
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="5"
                onClick={this.handleButtonClick}
              >
                5
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="6"
                onClick={this.handleButtonClick}
              >
                6
              </button>
            </td>
            <td>
              <button
                className="controlMain"
                value="x"
                onClick={this.handleClickSign}
              >
                x
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dangerBTN" onClick={this.handleClearClick}>
                AC
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="1"
                onClick={this.handleButtonClick}
              >
                1
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="2"
                onClick={this.handleButtonClick}
              >
                2
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="3"
                onClick={this.handleButtonClick}
              >
                3
              </button>
            </td>
            <td>
              <button
                className="controlMain"
                value="-"
                onClick={this.handleClickSign}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dangerBTN" onClick={this.handleClearClick}>
                C
              </button>
            </td>
            <td>
              <button
                className="controlNumber"
                value="0"
                onClick={this.handleButtonClick}
              >
                0
              </button>
            </td>
            <td>
              <button
                className="controlMain"
                value="dot"
                onClick={this.handleDotClick}
              >
                .
              </button>
            </td>
            <td>
              <button
                className="controlMain"
                value="+"
                onClick={this.handleClickSign}
              >
                +
              </button>
            </td>
            <td>
              <button className="resultBTN" onClick={this.handleResultClick}>
                =
              </button>
            </td>
          </tr>
        </tr>
      </Fragment>
    );
  }
}

export default Control;
