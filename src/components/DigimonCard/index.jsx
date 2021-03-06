import Button from '../Button';
import { Card, Image, Star } from './styles';

const DigimonCard = ({
	digimon,
	handleFavorite,
	handleRemove,
	favorite,
	isRemovable,
}) => {
	const { name, img, level } = digimon;
	return (
		<Card>
			<div>{name}</div>
			<Image src={img}></Image>
			<div>{level}</div>
			{favorite ? (
				<>
					<div>
						<Star />
					</div>
					<Button isRemovable={true} handleEvent={() => handleRemove(digimon)}>
						Remove
					</Button>
				</>
			) : (
				<Button handleEvent={() => handleFavorite(digimon)}>Add</Button>
			)}
		</Card>
	);
};

export default DigimonCard;
