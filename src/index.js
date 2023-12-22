import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'))


// How to create Component
// function HelloComponent() {
//   return <h1>Hello Component Brrooo!!!</h1>
// }
// ReactDOM.render(<HelloComponent />, document.getElementById('root'))

// How to create Class Component
// class HelloComponent extends React.Component {
//   render() {
//     return <h1>Hello The first class Component Brrooo!!!</h1>
//   }
// }
// ReactDOM.render(<HelloComponent />, document.getElementById('root'))


// How to Use External Component
// ReactDOM.render(<HelloComponent />, document.getElementById('root'))




// ReactDOM.render(data, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();