import Button from '../Button';
import { Card, Image } from './styles';
import { AiFillStar } from 'react-icons/ai';

const DigimonCard = ({ digimon, handleFavorite, favorite }) => {
	const { name, img, level } = digimon;
	return (
		<Card>
			<div>{name}</div>
			<Image src={img}></Image>
			<div>{level}</div>
			{favorite ? (
				<AiFillStar />
			) : (
				<Button handleFavorite={() => handleFavorite(digimon)}>Add</Button>
			)}
		</Card>
	);
};

export default DigimonCard;
