const React = require('react');

class Spaceship extends React.Component{
	render(){
		return (
			<div> 
				<h3>{this.props.name}</h3>
				<h4>{this.props.speed}</h4>
				<h4>{this.props.hasRockets}</h4>
				<small>{this.props.colors.join(', ')}</small>
			</div>
			)

	}
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
	};


module.exports = Spaceship