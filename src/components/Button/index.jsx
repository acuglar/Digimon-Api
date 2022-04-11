import './style.css';

const Button = ({ children, handleFavorite }) => {
	return (
		<button className='btn' onClick={handleFavorite}>
			{children}
		</button>
	);
};

export default Button;
