import styled from "styled-components";

export const StyledCadastro = styled.section `
    width: 100%;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 50px auto 0;
    align-items: flex-start;
    flex-wrap: wrap;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    width: 390px;
    text-align: justify;
    margin-top: 50px;
`

export const TitleHighlight = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    text-align: justify;
    color: #f1f1f195;
    margin-bottom: 8px;
`

export const Subtitle = styled.h4`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #f1f1f195;
    margin-bottom: 35px;
`

export const Terms = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    width: 350px;
    text-align: justify;
    color: #f1f1f195;
    margin: 27px 0 11px;
`

export const JaTenhoText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #f1f1f195;

    a {
        color: #23DD7A;
        text-decoration: none;
    }
`