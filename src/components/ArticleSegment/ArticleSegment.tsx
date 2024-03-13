
import {Container, SimpleGrid} from "@mantine/core";
import ContentCard from "../ContentCard/ContentCard.tsx";

const ArticleSegment = ({ articles }: any) => {
    const cards = articles.map((article) => (
        <ContentCard {...article} />
    ));

    return (
        <div>
            <Container size={1400}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    {cards}
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default ArticleSegment