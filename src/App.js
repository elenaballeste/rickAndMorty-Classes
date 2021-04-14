import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import Characters from './containers/Characters/Characters';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/characters" component={Characters} />
        <Route path="/" exact component={Home} />
      </Layout>
    );
  }
}

export default App;
