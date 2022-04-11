import { ButtonStyled } from './styles.js';

const Button = ({ children, handleEvent, isRemovable }) => {
	return (
		<ButtonStyled onClick={handleEvent} isRemovable={isRemovable}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
