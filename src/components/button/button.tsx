import StyledButton from "./styles"
import {IButton} from "./types"

const Button = ({variant = "primary", label, onClick}: IButton) => {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            {label}
        </StyledButton>
    )
}

export default Button