var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
	onSearch: function (e) {
		e.preventDefault();
		alert('not wired up');
	},
	render: function () {
		return (
		<div className="top-bar">
			<div className="top-bar-left">
			<ul className="menu">
				<li className="menu-text">React Weather App</li>
				<li>
					<IndexLink to="/" activeClassName="active" activeStyle={{border: '1px solid green'}}>Get Weather</IndexLink>
				</li>
				<li>
					<Link to="/about" activeClassName="active" activeStyle={{border: '1px solid green'}}>About</Link>
				</li>
				<li>
					<Link to="/examples" activeClassName="active" activeStyle={{border: '1px solid green'}}>Examples</Link>
				</li>
			</ul>
			</div>
			<div className="top-bar-right">
				<form onSubmit={this.onSearch}>
				<ul className="menu">
					<li>
						<input type="search" placeholder="search weather"/>
					</li>
					<li>
						<input type="submit" className="button" value="get weather"/>
					</li>
				</ul>
				</form>
			</div>
		</div>	
		);
	}
});

module.exports = Nav;