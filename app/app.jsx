var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'MyName',
	location: 'Earth'
};

var objTwo = {
	age: 79,
	...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate</h1>,
    document.getElementById('app')
);

