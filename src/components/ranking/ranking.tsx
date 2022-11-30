import { Container, Progress, StyledRanking, UserName, UserPicture } from "./styles"
import { IRanking } from "./types"

const UserRanking = ({name, image, percentual}:IRanking) => {
    return (
        <StyledRanking>
            <Container>
                <UserPicture src={image}/>
                <div>
                    <UserName>{name}</UserName>
                    <Progress percentual={percentual}/>
                </div>
            </Container>
        </StyledRanking>
    )
}

export default UserRanking