import React, { Component } from 'react';
import Routes from './Routes'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div style={{ marginTop: '10em', marginLeft: '50px', marginRight: '50px' }}>
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
