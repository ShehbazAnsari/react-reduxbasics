import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
import { Provider } from 'react-redux'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="header">
            <h1>Redux Practise</h1>
          </div>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;


