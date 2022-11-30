import styled from "styled-components";
import { IStyledRanking } from "./types";

export const StyledRanking = styled.div`
    background-color: #151515;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 8px;
    border-radius: 4px;
`

export const Container = styled.div`
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid #1E192C;

    & > div {
        padding-bottom: 12px;
        border-bottom: 0px;
    }
`
export const UserPicture = styled.img`
    width: 40px;
    height: 40px;
    border: 2px solid #f1f1f1;
    border-radius: 35px;
    margin-right: 12px;
`

export const UserName = styled.h4`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 8px;
`

export const Progress = styled.div<IStyledRanking>`
    width: 100%;
    height: 6px;
    background-color: #f1f1f1;
    position: relative;
    border-radius: 3px;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23dd7a;
    }
`