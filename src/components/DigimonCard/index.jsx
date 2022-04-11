import Button from '../Button';
import { Card, Image, Star } from './styles';

const DigimonCard = ({ digimon, handleFavorite, favorite }) => {
	const { name, img, level } = digimon;
	return (
		<Card>
			<div>{name}</div>
			<Image src={img}></Image>
			<div>{level}</div>
			{favorite ? (
				<Star />
			) : (
				<Button handleFavorite={() => handleFavorite(digimon)}>Add</Button>
			)}
		</Card>
	);
};

export default DigimonCard;
