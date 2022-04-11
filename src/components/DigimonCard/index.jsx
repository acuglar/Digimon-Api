import Button from '../Button';
import { Card, Image } from './styles';

const DigimonCard = ({ digimon, handleFavorite, favorite }) => {
	const { name, img, level } = digimon;
	return (
		<Card>
			<div>{name}</div>
			<Image src={img}></Image>
			<div>{level}</div>
			{favorite ? (
				<p>Favoritado</p>
			) : (
				<Button handleFavorite={() => handleFavorite(digimon)}>Add</Button>
			)}
		</Card>
	);
};

export default DigimonCard;
