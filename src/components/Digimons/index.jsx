import DigimonCard from '../DigimonCard';

const Digimons = ({ digimons, handleFavorite }) => {
	return (
		<>
			{digimons.map((digimon, index) => (
				<DigimonCard
					key={index}
					digimon={digimon}
					handleFavorite={handleFavorite}
				/>
			))}
		</>
	);
};

export default Digimons;
