import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent';

class App extends React.Component {
  render () {
    return (
        <div>
        <p> Hello React! </p>
        <AwesomeComponent foo="bar" />
        </div>
    )
  }
}

render(<App />, document.getElementById('app'));
