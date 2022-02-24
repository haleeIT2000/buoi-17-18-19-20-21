import React, { Component } from 'react';
import './hero.css';

// what is JSX ?
class Hero extends Component {
  render() {
    let a = 0;
    let b = 2;
    let element = 'jj';
    let c = `sadaadadadad ${b}`;
    let showInfo = false;
    let myObj = {
      name: 'donald titus',
      age: 15,
    };

    let math;
    let showSum = false;
    if (showSum) {
      math = <h1> 2 + 2 = {2 + 2}</h1>;
    } else math = null;

    return (
      <div className="abc">
        <h2 className="title2">This is hero {element.toUpperCase()} </h2>
        <p>something...{c}</p>

        {math}

        {showInfo ? (
          <h4>
            Info: {myObj.name} and age is: {myObj.age}{' '}
          </h4>
        ) : null}

        {/* jsx */}
        {React.createElement(
          'div',
          {
            className: 'abc',
          },
          React.createElement(
            'h2',
            {
              className: 'title2',
            },
            'This is hero (children)'
          )
        )}
        {/* end jsx */}
      </div>
    );
  }
}

export default Hero;