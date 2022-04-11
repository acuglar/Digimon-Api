import { Component } from 'react';
import './App.css';

import Digimons from './components/Digimons';

class App extends Component {
	state = {
		digimons: [],
	};

	componentDidMount() {
		fetch('https://digimon-api.vercel.app/api/digimon')
			.then(response => response.json())
			.then(response => this.setState({ digimons: response }))
			.catch(error => console.log(error));
	}

	render() {
		console.log(this.state.digimons);
		return (
			<div className='App'>
				<main className='App-main'>
					<Digimons digimons={this.state.digimons} />
				</main>
			</div>
		);
	}
}

export default App;
