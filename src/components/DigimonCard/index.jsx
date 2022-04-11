import './style.css';
import Button from '../Button';

const DigimonCard = props => {
	return (
		<div>
			<div>{props.name}</div>
			<img className='image' src={props.img} alt={props.name} />
			<Button />
		</div>
	);
};

export default DigimonCard;
