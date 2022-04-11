import './style.css';
// import Button from '../Button';

const DigimonCard = ({ digimon: { name, img, level } }) => {
	return (
		<div className='card'>
			<div>{name}</div>
			<img className='image' src={img} alt={name} />
			<div>{level}</div>
		</div>
	);
};

export default DigimonCard;
