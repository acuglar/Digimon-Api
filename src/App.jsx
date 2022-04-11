import { Component } from 'react';
import { Container, List, FavoriteList } from './styles';

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

	handleRemove = digimonToBeDeleted => {
		this.setState({
			favorite: this.state.favorite.filter(
				digimon => digimon.name !== digimonToBeDeleted.name
			),
		});
	};

	render() {
		console.log(this.state.favorite);
		return (
			<Container>
				{this.state.error && <div>{this.state.error}</div>}
				<FavoriteList>
					<Digimons
						digimons={this.state.favorite}
						handleRemove={this.handleRemove}
						favorite={true}
					/>
				</FavoriteList>
				<List>
					<Digimons
						digimons={this.state.digimons}
						handleFavorite={this.handleFavorite}
					/>
				</List>
			</Container>
		);
	}
}

export default App;
