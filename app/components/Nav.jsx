var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Nav Component</h2>			
				<IndexLink to="/" activeClassName="active" activeStyle={{border: '1px solid green'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{border: '1px solid green'}}>About</Link>
				<Link to="/examples" activeClassName="active" activeStyle={{border: '1px solid green'}}>Examples</Link>
			</div>
		);
	}
});

module.exports = Nav;