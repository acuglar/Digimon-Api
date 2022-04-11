import { ButtonStyled } from './styles.js';

const Button = ({ children, handleFavorite }) => {
	return <ButtonStyled onClick={handleFavorite}>{children}</ButtonStyled>;
};

export default Button;
