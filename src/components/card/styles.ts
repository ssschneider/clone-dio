import styled from "styled-components";

export const CardContainer = styled.div `
    width: 100%;
    position: relative;
    margin-bottom: 24px;
    background-color: #3b4651;
    border-radius: 4px;
    transition: .5s ease-in-out;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 12px 0;
`

export const UserInfo = styled.div`
    display: flex;
    margin-bottom: 12px;
    align-items: center;

    div {
        margin-left: 12px;
    }

    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`

export const UserPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 32px;
    border: 2px solid #f1f1f1;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4 {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
    }

    p {
        font-weight: 700;
        font-size: 16px;
        margin-top: 10px;
        line-height: 22px;
        display: flex;
        width: 8%;
        justify-content: space-between;
        align-items: center;
    }
`