import { useNavigate } from "react-router-dom";
import Button from "../button/button"
import {StyledHeader, Buscar, Row, Input, Menu, MenuRight, Wrapper, UserPicture} from "./styles"
import { IHeader } from "./types";

const Header = ({autenticado}: IHeader) => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/")
    }

    const handleOpenLogin = () => {
        navigate("/login")
    }

    const handleRegister = () => {
        navigate("/cadastro")
    }

    return (
        <Wrapper>
            <StyledHeader>
                <Row>
                    <img src="https://hermes.digitalinnovation.one/assets/diome/logo.svg" height={30} alt="Logo da DIO" onClick={handleClickHome}/>
                    {autenticado ? (
                        <>
                            <Buscar>
                                <Input placeholder="Buscar"/>
                            </Buscar>

                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/110000201?v=4" alt="Usuário"/>
                    ) : (
                        <>
                            <MenuRight href="#" onClick={handleClickHome}>Home</MenuRight>
                            <Button label="Entrar" onClick={handleOpenLogin}/>
                            <Button label="Cadastrar" onClick={handleRegister}/>
                        </>
                    )}
                </Row>
            </StyledHeader>
        </Wrapper>
    )
}

export default Header