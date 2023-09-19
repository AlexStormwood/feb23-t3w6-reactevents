import React from "react";


export default class Pokemon extends React.Component {
	constructor(){
		super();

		this.state = {
			pokemonData: {}
		}
	}

	render(){
		if (this.state.pokemonData.name){
			return(
				<div>
					<h1>Pokemon data found!</h1>
				</div>
			)
		} else {
			return(
				<div>
					<h1>Still loading Pokemon data...</h1>
				</div>
			)
		}
	}
}