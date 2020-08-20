import React, { Component } from 'react';
import './App.css';

import ComponentOne from './Components/ComponentOne';

const data = [
  { id: 1, name: 'shubham', age: 20},
  // { id: 2, name: 'amit', age: 25},
  // { id: 3, name: 'snehal', age: 30},
  // { id: 4, name: 'john', age: 20},
  // { id: 5, name: 'mona', age: 15}
]

class App extends Component {
  render() {
    return (
      <>
      {
        data.map((data, index) => {
          return (
            <ComponentOne name={data.name} age={data.age} key={data.id}/>
          )
        })
      }
      </>
    )
  }
}

export default App;
