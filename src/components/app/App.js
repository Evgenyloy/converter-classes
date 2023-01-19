import { Component } from 'react';
import './App.css';
import Display from '../display/Display';
import Form from '../form/Form';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      isLoading: true,
      currency: {},
      usd: '',
      eur: '',
      gbp: '',
    };
  }

  componentDidMount() {
    this.getState();
  }

  getState = async () => {
    try {
      const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
      const res = await fetch(API_URL);
      const data = await res.json();

      this.setState({ currency: data });
      this.setState({ usd: data.Valute.USD.Value.toFixed(2) });
      this.setState({ eur: data.Valute.EUR.Value.toFixed(2) });
      this.setState({ gbp: data.Valute.GBP.Value.toFixed(2) });
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({ isLoading: false });
  };

  render() {
    if (this.state.error) {
      return <h1>Error: {this.state.error}</h1>;
    }

    return (
      <div className="converter">
        <div className="converter__title">Currency Converter</div>
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Display
            usd={this.state.usd}
            eur={this.state.eur}
            gbp={this.state.gbp}
            currency={this.state.currency}
          />
        )}
        <ErrorBoundary>
          <Form
            usd={this.state.usd}
            eur={this.state.eur}
            gbp={this.state.gbp}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
