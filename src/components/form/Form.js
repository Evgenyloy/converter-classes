import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      valueSelected: 'usd',
    };
  }

  onValueChange = (e) => {
    this.setState({ input1: e.target.value });
  };

  onSelect = (e) => {
    this.setState({ valueSelected: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.input1 !== this.state.input1 ||
      prevState.valueSelected !== this.state.valueSelected
    ) {
      let a = (
        Number(this.state.input1) / this.props[this.state.valueSelected]
      ).toFixed(2);
      this.setState({ input2: a === 'NaN' ? 0 : a });
    }
  }

  render() {
    return (
      <form action="#" className="converter__form-inner">
        <div className="converter__form">
          <select className="converter__form-select">
            <option value="RUB">RUB</option>
          </select>
          <input
            className="converter__form-input"
            id="input1"
            type="number"
            placeholder="0"
            value={this.state.input1}
            onChange={this.onValueChange}
          />
        </div>
        <div className="converter__form">
          <select
            className="converter__form-select"
            id="select"
            onChange={this.onSelect}
            value={this.valueSelected}
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GPB</option>
          </select>
          <input
            className="converter__form-input"
            id="input2"
            type="text"
            readOnly
            value={this.state.input2}
          />
        </div>
      </form>
    );
  }
}

export default Form;
