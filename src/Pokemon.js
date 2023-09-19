import React from "react";


export default class Pokemon extends React.Component {
	constructor(){
		super();

		this.state = {
			pokemonData: {}
		}
	}

	async componentDidMount() {
		let randomPokemonNumber = Math.floor(Math.random() * 1010) + 1;
		let apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);
		let apiData = await apiResponse.json();

		this.setState({pokemonData: apiData});
	}

	render(){
		if (this.state.pokemonData.name){
			return(
				<div>
					<h1>{this.state.pokemonData.name}</h1>
					<img src={this.state.pokemonData.sprites.front_default} alt="Pokemon API sprite" />
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