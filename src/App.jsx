import { Component } from 'react';
import './App.css';

import Digimons from './components/Digimons';

class App extends Component {
	state = {
		digimons: [],
		favorite: [],
	};

	componentDidMount() {
		fetch('https://digimon-api.vercel.app/api/digimon')
			.then(response => response.json())
			.then(response => this.setState({ digimons: response }))
			.catch(error => console.log(error));
	}

	handleFavorite = digimon => {
		this.setState({ favorite: [...this.state.favorite, digimon] });
	};

	render() {
		console.log(this.state.favorite);
		return (
			<div className='App'>
				<main className='App-main'>
					<Digimons
						digimons={this.state.digimons}
						handleFavorite={this.handleFavorite}
					/>
				</main>
			</div>
		);
	}
}

export default App;
