import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3b3450;
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding: 4px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    outline: none;
    border: 0px;
    height: 30px;
    font-size: 22px;
    padding: 2px 4px;
`

export const ErrorText = styled.p`
    font-weight: 700;
    font-size: 12px;
    color: #ff000f;
    margin: 4px 0 15px;
`