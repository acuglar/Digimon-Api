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

		// then( response => {
		//   return newArray = response.map( obj => {...obj, id: uuidv4()})
		//   logica pra add id
		// })
	}

	handleFavorite = digimonSelected => {
		const { favorite } = this.state;
		const digimonExists = favorite.find(
			digimon => digimon.name === digimonSelected.name
		);

		if (!digimonExists) {
			this.setState({ favorite: [...favorite, digimonSelected] });
		}
	};

	handleRemove = digimonToBeDeleted => {
		const { favorite } = this.state;
		this.setState({
			favorite: favorite.filter(
				digimon => digimon.name !== digimonToBeDeleted.name
			),
		});
	};

	render() {
		const { digimons, favorite, error } = this.state;
		return (
			<Container>
				{error && <div>{error}</div>}
				<FavoriteList>
					<Digimons
						digimons={favorite}
						handleRemove={this.handleRemove}
						favorite={true}
					/>
				</FavoriteList>
				<List>
					<Digimons digimons={digimons} handleFavorite={this.handleFavorite} />
				</List>
			</Container>
		);
	}
}

export default App;
