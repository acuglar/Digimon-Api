import { ButtonStyled } from './styles.js';

const Button = ({ children, handleEvent }) => {
	return <ButtonStyled onClick={handleEvent}>{children}</ButtonStyled>;
};

export default Button;
