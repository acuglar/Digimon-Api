import { Component } from 'react';
import './App.css';

import Digimons from './components/Digimons';

class App extends Component {
	state = {
		digimons: [],
		favorite: [],
		error: '',
	};

	componentDidMount() {
		fetch('https://digimon-api.vercel.app/api/digimon')
			.then(response => response.json())
			.then(response => this.setState({ digimons: response }))
			.catch(error => this.setState({ error }));
	}

	handleFavorite = digimon => {
		this.setState({ favorite: [...this.state.favorite, digimon] });
	};

	render() {
		console.log(this.state.favorite);
		return (
			<div className='App'>
				{this.state.error && <div>{this.state.error}</div>}
				<div>
					<Digimons digimons={this.state.favorite} />
				</div>
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
