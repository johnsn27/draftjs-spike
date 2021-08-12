import React, { Component } from 'react';
import './App.css';
import RichTextEditor from './components/Editor'

const Introduction = () => (
  <section>
    <h1>This is a demo of a new text editor we would like feedback on</h1>
    <p>This demo application contains a new text editor. The editor has rich text editing cababilities with the use of the bold and italic buttons</p>
  </section>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction />
        <RichTextEditor />
      </div>
    );
  }
}

export default App;