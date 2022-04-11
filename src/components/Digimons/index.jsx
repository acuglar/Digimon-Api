import DigimonCard from '../DigimonCard';

const Digimons = ({ digimons, handleFavorite, favorite }) => {
	return (
		<>
			{digimons.map((digimon, index) => (
				<DigimonCard
					key={index}
					digimon={digimon}
					handleFavorite={handleFavorite}
					favorite={favorite}
				/>
			))}
		</>
	);
};

export default Digimons;
