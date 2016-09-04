/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {

  async componentWillMount() {
    // Incompatible with flow
  }

  render() {
    return <div />
  }
}
