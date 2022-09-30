import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ onPress }) => {
    return (
    <ButtonStyled type="button" onClick={onPress}>Load More</ButtonStyled>
    )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};