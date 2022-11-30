import {CardContainer, CardImage, Content, HasInfo, PostInfo, UserInfo, UserPicture} from "./styles"
import { FaHeart } from "react-icons/fa";

const Card = () => {
    return (
        <CardContainer>
            <CardImage src="https://i.ytimg.com/vi/0EKTZcrUF5w/maxresdefault.jpg" alt=""/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/110000201?v=4" alt="Autor(a) do Post"/>
                    <div>
                        <h4>Sarah Schneider</h4>
                        <p>há 11 minutos</p>
                    </div>
                </UserInfo>

                <PostInfo>
                    <h4>Projeto para o Bootcamp</h4>
                    <p>Projeto desenvolvido durante o módulo de React do Bootcmap Orange Tech+, uma parceria entre a DIO e o Banco Inter</p>
                </PostInfo>

                <HasInfo>
                    <h4>#HTML #CSS #JS #REACT</h4>
                    <p><FaHeart /> 10</p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card