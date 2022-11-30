import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

const StyledButton = styled.button<IButtonStyled> `
    background-color: #565656;
    border-radius: 24px;
    border: 0px;
    padding: 2px 12px;
    position: relative;
    margin: 0 2px;
    color: #f1f1f1;
    min-width: 120px;
    width: 100%;
    cursor: pointer;
    transition: .5s ease-in-out;

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background-color: #e41050;

        &::after {
            content: " ";
            position: absolute;
            border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

        &:hover {
        box-shadow: 0px 0px 8px #e41050;
        scale: 1.05;
    }
    `}
`

export default StyledButton