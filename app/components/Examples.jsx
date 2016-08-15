var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
		<h3 className="text-center">Examples of searches</h3>
		<p>A few locations to test: </p>
		<ol>
		<li>
			<Link to='/?location=newyork'>New York, NY</Link>
			<li>
			<Link to='/?location=brooklyn'>Brooklyn, NY</Link>			
			</li>
			<li>
			<Link to='/?location=london'>London, UK</Link>
			</li>
		</li>
		</ol>
		</div>
		)
}

module.exports = Examples;