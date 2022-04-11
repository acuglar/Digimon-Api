import './style.css';
import DigimonCard from '../DigimonCard';

const Digimons = props => {
	return (
		<>
			{props.digimons.map((digimon, index) => (
				<DigimonCard key={index} name={digimon.name} img={digimon.img} />
			))}
		</>
	);
};

export default Digimons;
