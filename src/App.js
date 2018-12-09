import React, { Component } from 'react';
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {console.log(store.getState())}
        <button onClick={() => store.dispatch({type:'ADD_JEMBUT'})}>
          {'KONTOL'}
        </button>
      </div>
    );
  }
}

export default App;
