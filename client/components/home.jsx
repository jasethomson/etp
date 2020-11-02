import React from 'react';
import Homework from './sections/homework';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: ''
    };
  }

  render() {
    return (
      <div id="home" className="homeContainer">
        <Homework />
      </div>
    );
  }
}
