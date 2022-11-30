import Header from "../../components/header/header";
import Card from "../../components/card/card";
import { Column, StyledFeed, Title, TitleHighlight } from "./styles";
import UserRanking from "../../components/ranking/ranking";

const Feed = () => {
	return (
		<>
			<Header autenticado={true}/>
			<StyledFeed>
				<Column flex={2}>
                    <Title>#FEED</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                <Column flex={1}>
                    <TitleHighlight>#Ranking da Semana</TitleHighlight>
                    <UserRanking name="Sarah Schneider 1" image="https://avatars.githubusercontent.com/u/110000201?v=4" percentual={80}/>
                    <UserRanking name="Sarah Schneider 2" image="https://avatars.githubusercontent.com/u/110000201?v=4" percentual={30}/>
                    <UserRanking name="Sarah Schneider 3" image="https://avatars.githubusercontent.com/u/110000201?v=4" percentual={50}/>
                    <UserRanking name="Sarah Schneider 4" image="https://avatars.githubusercontent.com/u/110000201?v=4" percentual={50}/>
                    <UserRanking name="Sarah Schneider 5" image="https://avatars.githubusercontent.com/u/110000201?v=4" percentual={95}/>
                </Column>
			</StyledFeed>
		</>
	);
};

export default Feed;
