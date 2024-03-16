import {Container, SimpleGrid} from "@mantine/core";
import ContentCard from "../ContentCard/ContentCard.tsx";

const ArticleSegment = ({ articles, style }: any) => {
    const cards = articles.map((article) => (
        <ContentCard {...article} />
    ));

    return (
        <div style={style}>
            <Container size={1400}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    {cards}
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default ArticleSegment