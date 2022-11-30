import styled from "styled-components";
import { IStyledFeed } from "./types";

export const StyledFeed = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 80px auto 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const Title = styled.h2`
    font: 700 18px 25px;
    margin-bottom: 24px;
`

export const TitleHighlight = styled.h2`
    font: 700 18px 25px;
    margin-bottom: 24px;
    color: #f1f1f190;
`

export const Column = styled.div <IStyledFeed>`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`