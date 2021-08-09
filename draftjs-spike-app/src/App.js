import React, { Component } from 'react';
import './App.css';
import RichTextEditor from './components/Editor'


class App extends Component {
  render() {
    return (
      <div className="App">
        <RichTextEditor />
      </div>
    );
  }
}

export default App;