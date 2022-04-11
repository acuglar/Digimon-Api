import DigimonCard from '../DigimonCard';

const Digimons = ({ digimons, handleFavorite, handleRemove, favorite }) => {
	return (
		<>
			{digimons.map((digimon, index) => (
				<DigimonCard
					key={index}
					digimon={digimon}
					handleFavorite={handleFavorite}
					handleRemove={handleRemove}
					favorite={favorite}
				/>
			))}
		</>
	);
};

export default Digimons;
