import './style.css';
import Button from '../Button';

const DigimonCard = ({ digimon, handleFavorite, favorite }) => {
	const { name, img, level } = digimon;
	return (
		<div className='card'>
			<div>{name}</div>
			<img className='image' src={img} alt={name} />
			<div>{level}</div>
			{favorite ? (
				<p>Favoritado</p>
			) : (
				<Button handleFavorite={() => handleFavorite(digimon)}>Add</Button>
			)}
		</div>
	);
};

export default DigimonCard;
