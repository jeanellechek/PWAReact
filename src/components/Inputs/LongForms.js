import React from 'react';
import './Input.css';
import '.././styles.css';


export default class OnBoardingForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayError: false,
      inputVal: null,
    };
  }

  validateInput() {
    var emailInput = document.getElementById("errorInput").value;
    var regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var input = document.getElementById("errorInput");

    if (regExp.test(emailInput) === true || emailInput === "") {
      this.setState({ displayError: false });
      input.style.borderColor = "#D9E1E2";
    }
    else {
      this.setState({ displayError: true });
      input.style.borderColor = "red";
    }

  }

  render() {
    const errorMsg = this.state.displayError;
    return (
      <div>
        <p className="titleBold">
          <label id="text">Normal</label><br />
          <input type="text" placeholder="E.g name@email.com" className="LongTextbox body" id="muted" />
        </p>

        <p className="titleBold">
          Active<br />
          <input type="text" placeholder="E.g name@email.com" className="LongTextbox body" id="active" />
        </p>

        <p className="titleBold">
          Error State<br />
          <input type="text" placeholder="E.g name@email.com" id="errorInput" onChange={this.validateInput.bind(this)} className="LongTextbox body" /><br />
          {(errorMsg === true) ? <label className="error" id="error">Hmm... It doesn't seem right.</label> : null}
        </p>

        <p className="titleBold">
          Disabled Input<br />
          <input type="text" placeholder="E.g name@email.com" className="LongTextbox body  opacity30" disabled />
        </p>
      </div>
    )
  }
}